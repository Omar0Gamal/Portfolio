'use client'

import ShareButtons from '@/components/ShareButtons'
import ScrollSpyToc from '@/components/ScrollSpyToc'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import Particles from '@/components/Particles'
import { ProcessedArticle } from '@/lib/articles'

interface ArticleProps {
    article: ProcessedArticle
}

export default function ArticleC({ article }: ArticleProps) {
    return (
        <>
            <BackgroundAnimation />
            <Particles />
            
            <style jsx global>{`
                /* Custom scrollbar for content */
                .article-content::-webkit-scrollbar {
                    width: 8px;
                }
                .article-content::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .article-content::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .article-content::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                /* Custom code block styling */
                .article-content pre {
                    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 20, 20, 0.6) 100%) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 12px !important;
                    padding: 20px !important;
                    margin: 24px 0 !important;
                    overflow: visible !important;
                    position: relative !important;
                    backdrop-filter: blur(10px) !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                }

                .article-content pre::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 40px;
                    background: linear-gradient(90deg, rgba(255, 107, 107, 0.2), rgba(255, 206, 84, 0.2), rgba(76, 217, 100, 0.2));
                    border-radius: 12px 12px 0 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .article-content pre::after {
                    content: '● ● ●';
                    position: absolute;
                    top: 12px;
                    left: 16px;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 12px;
                    letter-spacing: 4px;
                }

                .article-content pre code {
                    background: transparent !important;
                    padding: 0 !important;
                    border-radius: 0 !important;
                    color: #e6e6e6 !important;
                    overflow-wrap: break-word !important;
                    word-break: break-word !important;
                    white-space: pre-wrap !important;
                    margin-top: 30px !important;
                    display: block !important;
                    line-height: 1.6 !important;
                    font-family: 'Fira Code', 'Consolas', monospace !important;
                }

                /* Inline code styling */
                .article-content code:not(pre code) {
                    background: rgba(255, 255, 255, 0.1) !important;
                    color: #ffd700 !important;
                    padding: 2px 6px !important;
                    border-radius: 6px !important;
                    font-size: 0.9em !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    font-family: 'Fira Code', 'Consolas', monospace !important;
                }

                /* Enhanced typography */
                .article-content h1, .article-content h2, .article-content h3, .article-content h4, .article-content h5, .article-content h6 {
                    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                }

                /* Remove top margin from first header */
                .article-content h1:first-child, 
                .article-content h2:first-child, 
                .article-content h3:first-child, 
                .article-content h4:first-child, 
                .article-content h5:first-child, 
                .article-content h6:first-child {
                    margin-top: 0 !important;
                }

                /* Add margin for subsequent headers */
                .article-content h1:not(:first-child), 
                .article-content h2:not(:first-child), 
                .article-content h3:not(:first-child), 
                .article-content h4:not(:first-child), 
                .article-content h5:not(:first-child), 
                .article-content h6:not(:first-child) {
                    margin-top: 2rem !important;
                }

                .article-content h2 {
                    font-size: 2rem !important;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }

                .article-content h3 {
                    font-size: 1.5rem !important;
                }

                .article-content p {
                    line-height: 1.8 !important;
                    margin-bottom: 1.25rem !important;
                    color: rgba(255, 255, 255, 0.9) !important;
                }

                .article-content blockquote {
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%) !important;
                    border-left: 4px solid #3b82f6 !important;
                    padding: 16px 20px !important;
                    margin: 24px 0 !important;
                    border-radius: 0 8px 8px 0 !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(59, 130, 246, 0.2) !important;
                    border-left: 4px solid #3b82f6 !important;
                }

                .article-content blockquote p {
                    margin: 0 !important;
                    font-style: italic !important;
                    color: rgba(255, 255, 255, 0.95) !important;
                }

                /* List styling with bullet points */
                .article-content ul, .article-content ol {
                    padding-left: 1.5rem !important;
                    margin-bottom: 1.25rem !important;
                    list-style: none !important;
                }

                .article-content ul li {
                    position: relative !important;
                    margin-bottom: 0.5rem !important;
                    color: rgba(255, 255, 255, 0.9) !important;
                    line-height: 1.7 !important;
                    padding-left: 1rem !important;
                }

                .article-content ul li::before {
                    content: '•' !important;
                    position: absolute !important;
                    left: 0 !important;
                    color: #3b82f6 !important;
                    font-weight: bold !important;
                }

                .article-content ol li {
                    position: relative !important;
                    margin-bottom: 0.5rem !important;
                    color: rgba(255, 255, 255, 0.9) !important;
                    line-height: 1.7 !important;
                    padding-left: 1rem !important;
                    counter-increment: list-counter !important;
                }

                .article-content ol {
                    counter-reset: list-counter !important;
                }

                .article-content ol li::before {
                    content: '-' !important;
                    position: absolute !important;
                    left: 0 !important;
                    color: #3b82f6 !important;
                    font-weight: bold !important;
                }

                /* Nested lists */
                .article-content ul ul, .article-content ol ol, .article-content ul ol, .article-content ol ul {
                    margin-top: 0.5rem !important;
                    margin-bottom: 0.5rem !important;
                    padding-left: 1rem !important;
                }

                .article-content a {
                    color: #3b82f6 !important;
                    text-decoration: none !important;
                    border-bottom: 1px solid rgba(59, 130, 246, 0.3) !important;
                    transition: all 0.3s ease !important;
                }

                .article-content a:hover {
                    color: #60a5fa !important;
                    border-bottom-color: #60a5fa !important;
                    text-shadow: 0 0 8px rgba(96, 165, 250, 0.3) !important;
                }

                /* Table styling */
                .article-content table {
                    border-collapse: separate !important;
                    border-spacing: 0 !important;
                    width: 100% !important;
                    margin: 24px 0 !important;
                    background: rgba(0, 0, 0, 0.2) !important;
                    border-radius: 12px !important;
                    overflow: hidden !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                }

                .article-content th, .article-content td {
                    padding: 12px 16px !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                    color: rgba(255, 255, 255, 0.9) !important;
                }

                .article-content th {
                    background: rgba(255, 255, 255, 0.05) !important;
                    font-weight: 600 !important;
                    color: #ffffff !important;
                }

                /* Image styling */
                .article-content img {
                    border-radius: 12px !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    margin: 24px 0 !important;
                }
            `}</style>

            {/* Main Content */}
            <div className="relative flex gap-8 pt-16 pb-16 px-5">
                <ScrollSpyToc toc={article.toc} />
                
                <main className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto w-full">
                    <article className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                        {/* Article Title and Meta */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
                                {article.article.title}
                            </h1>
                            
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 mb-6 p-4 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto">
                                {article.article.author && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xs font-bold text-white">
                                            {article.article.author.charAt(0).toUpperCase()}
                                        </div>
                                        <span>By {article.article.author}</span>
                                    </div>
                                )}
                                {article.article.publishedAt && (
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002 2z" />
                                        </svg>
                                        <span>{new Date(article.article.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{article.article.readTime} min read</span>
                                </div>
                            </div>

                            {article.article.tags && article.article.tags.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8">
                                    {article.article.tags.map((tag, index) => (
                                        <span 
                                            key={`${tag}-${index}`} 
                                            className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 text-primary text-xs rounded-full font-medium hover:scale-105 transition-transform duration-200"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div 
                            className="article-content prose-invert max-w-none leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: article.html }} 
                        />

                        <div className="mt-16 pt-8 border-t border-white/10">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-lg font-semibold mb-4 text-white">Share this article</h3>
                                <ShareButtons title={article.article.title} />
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </>
    )
}
