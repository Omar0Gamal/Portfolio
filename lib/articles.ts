import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import DOMPurify from 'isomorphic-dompurify';
import readingTime from 'reading-time';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  slug: string;
  category?: string;
  readTime: number;
  tags?: string[];
  excerpt?: string;
}

export interface ProcessedArticle {
  article: Article;
  html: string;
  toc: TocItem[];
  readMinutes: number;
}

const articlesDir = path.join(process.cwd(), 'content/articles');

function isMarkdownFile(fileName: string) {
  return fileName.endsWith('.md') || fileName.endsWith('.mdx');
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

async function processMarkdownContent(content: string): Promise<{ html: string; toc: TocItem[] }> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeSanitize, {
      tagNames: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'strong', 'em', 'u', 'del',
        'blockquote', 'code', 'pre',
        'ul', 'ol', 'li',
        'a', 'img',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'div', 'span'
      ],
      attributes: {
        a: ['href', 'title'],
        img: ['src', 'alt', 'title', 'width', 'height'],
        pre: ['className'],
        code: ['className'],
        '*': ['id', 'className']
      },
      protocols: {
        href: ['http', 'https', 'mailto'],
        src: ['http', 'https']
      }
    })
    .use(rehypeStringify)
    .process(content);

  let html = String(file);

  // Additional sanitization with DOMPurify
  html = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'strong', 'em', 'u', 'del',
      'blockquote', 'code', 'pre',
      'ul', 'ol', 'li',
      'a', 'img',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'id', 'class', 'width', 'height']
  });

  // Extract TOC
  const toc: TocItem[] = [];
  const headingRegex = /<h([23])\s+id="([^"]*)"[^>]*>([^<]*)<\/h\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(html))) {
    const level = parseInt(match[1], 10);
    const id = match[2].trim();
    const text = match[3].trim();

    if (id && text && (level === 2 || level === 3)) {
      toc.push({ id, text, level });
    }
  }

  return { html, toc };
}

export function getAllArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDir)
    .filter(isMarkdownFile)
    .map(slugFromFilename);
}

export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs();

  const articles: Article[] = slugs.map((slug) => {
    const fullPath = path.join(articlesDir, `${slug}.md`);
    const file = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(file);

    if (!data.title || !data.author || !data.date) {
      throw new Error(`Missing required metadata in article: ${slug}`);
    }

    const readMinutes = Math.ceil(readingTime(content).minutes);

    return {
      id: slug,
      slug,
      title: data.title,
      author: data.author,
      publishedAt: data.date,
      content,
      category: data.category,
      readTime: readMinutes,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
    };
  });

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<ProcessedArticle | null> {
  try {
    const fullPath = path.join(articlesDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const file = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(file);

    if (!data.title || !data.author || !data.date) {
      throw new Error(`Missing required metadata in article: ${slug}`);
    }

    const readMinutes = Math.ceil(readingTime(content).minutes);
    const { html, toc } = await processMarkdownContent(content);

    const article: Article = {
      id: slug,
      slug,
      title: data.title,
      author: data.author,
      publishedAt: data.date,
      content,
      category: data.category,
      readTime: readMinutes,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
    };

    return { article, html, toc, readMinutes };
  } catch (error) {
    console.error(`Error processing article ${slug}:`, error);
    return null;
  }
}

export async function getLatestArticles(limit: number = 3): Promise<Article[]> {
  const articles = getAllArticles();
  return articles.slice(0, limit);
}
