import Link from 'next/link';
import { Article } from '../lib/articles';

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    const truncateContent = (content: string, maxLength: number = 150) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength).trim() + '...';
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <article className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <div className="flex items-center text-sm text-secondary/70 mb-4">
                <time>{formatDate(article.publishedAt)}</time>
                {article.category && (
                    <>
                        <span className="mx-2">•</span>
                        <span className="bg-primary/10 text-primary py-1 px-3 rounded-full text-xs border border-primary/30">
                            {article.category}
                        </span>
                    </>
                )}
                {article.readTime && (
                    <>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-secondary/70">
                            {article.readTime} min read
                        </span>
                    </>
                )}
            </div>

            <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">
                {article.title}
            </h3>

            <p className="text-secondary/80 mb-6 leading-relaxed">
                {truncateContent(article.excerpt || article.content)}
            </p>

            <Link 
                href={`/articles/${article.slug}`}
                className="inline-flex items-center text-primary hover:text-accent font-medium transition-colors duration-300 hover:translate-x-1"
            >
                Read More →
            </Link>
        </article>
    );
}
