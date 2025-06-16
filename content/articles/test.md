---
title: How to Build a Modern Blog with Next.js
author: Omar Gamal
date: 2024-06-01
tags: [nextjs, blog, markdown, tailwind]
excerpt: Learn how to create a blog using Next.js, Tailwind, and Markdown.
---

## Introduction

Welcome to this tutorial on building a modern blog using **Next.js**, Markdown, and TailwindCSS. In this comprehensive guide, we'll walk through every step of creating a fully functional blog that's both developer-friendly and performant.

## Why Markdown?

Markdown is a lightweight markup language that's perfect for writing articles. It offers simplicity without sacrificing functionality, making it the go-to choice for technical documentation and blog posts.

### Easy Formatting

You can easily format text like **bold**, _italic_, or `inline code`. Markdown's syntax is intuitive and doesn't get in the way of your writing flow.

### Lists

- It supports lists
- With multiple levels
    - Like this
    - And this
        - Even deeper nesting
- Ordered lists too
- Perfect for tutorials

## Setting Up Next.js

Next.js provides an excellent foundation for building static sites and blogs. Here's how to get started:

### Installation

First, create a new Next.js project:

```bash
npx create-next-app@latest my-blog
cd my-blog
npm install
```

### Project Structure

Your blog should follow this structure:

```
my-blog/
├── pages/
│   ├── index.js
│   └── blog/
│       └── [slug].js
├── content/
│   └── articles/
├── components/
└── styles/
```

## Code Examples

### Basic Blog Component

```js
import React from 'react'
import Link from 'next/link'

export default function BlogPost({ title, excerpt, slug }) {
    return (
        <article className="mb-8 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <Link href={`/blog/${slug}`}>
                <a className="text-blue-600 hover:underline">Read more</a>
            </Link>
        </article>
    )
}
```

### Markdown Parser

```js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getPostData(slug) {
    const fullPath = path.join(process.cwd(), 'content', 'articles', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const matterResult = matter(fileContents)
    
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    
    const contentHtml = processedContent.toString()
    
    return {
        slug,
        contentHtml,
        ...matterResult.data
    }
}
```

## Styling with TailwindCSS

TailwindCSS makes it easy to create beautiful, responsive designs:

### Typography

```css
.prose {
    @apply text-gray-900 leading-relaxed;
}

.prose h1 {
    @apply text-4xl font-bold mb-6;
}

.prose h2 {
    @apply text-3xl font-semibold mb-4 mt-8;
}

.prose p {
    @apply mb-4;
}
```

### Responsive Design

```js
export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold">My Blog</h1>
                </div>
            </header>
            <main className="max-w-4xl mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}
```

## Advanced Features

### Table of Contents

You can implement a table of contents that updates as users scroll:

```js
import { useEffect, useState } from 'react'

export default function TableOfContents() {
    const [activeId, setActiveId] = useState('')
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )
        
        const headings = document.querySelectorAll('h2, h3, h4')
        headings.forEach((heading) => observer.observe(heading))
        
        return () => observer.disconnect()
    }, [])
    
    return (
        <nav className="sticky top-8">
            <h3 className="font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2">
                <li>
                    <a href="#introduction" 
                       className={activeId === 'introduction' ? 'text-blue-600' : 'text-gray-600'}>
                        Introduction
                    </a>
                </li>
                <li>
                    <a href="#why-markdown" 
                       className={activeId === 'why-markdown' ? 'text-blue-600' : 'text-gray-600'}>
                        Why Markdown?
                    </a>
                </li>
                <li>
                    <a href="#setup" 
                       className={activeId === 'setup' ? 'text-blue-600' : 'text-gray-600'}>
                        Setting Up Next.js
                    </a>
                </li>
            </ul>
        </nav>
    )
}
```

## Performance Optimization

### Image Optimization

```js
import Image from 'next/image'

export default function OptimizedImage({ src, alt, caption }) {
    return (
        <figure className="my-8">
            <Image
                src={src}
                alt={alt}
                width={800}
                height={400}
                className="rounded-lg"
                placeholder="blur"
            />
            {caption && (
                <figcaption className="text-center text-gray-600 mt-2">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}
```

### Static Generation

```js
export async function getStaticPaths() {
    const posts = getAllPosts()
    
    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug)
    
    return {
        props: {
            postData
        }
    }
}
```

## Conclusion

Building a modern blog with Next.js, Markdown, and TailwindCSS provides an excellent developer experience while delivering fast, SEO-friendly pages. The combination of static generation and dynamic routing makes it perfect for content-heavy sites.

With the examples shown above, you now have a solid foundation to build upon. Remember to focus on performance, accessibility, and user experience as you expand your blog's functionality.
