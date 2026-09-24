'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Article } from '@/lib/articles';
import ArticleCard from './ArticleCard';

interface LatestArticlesProps {
    articles: Article[];
}

export default function LatestArticles({ articles: initialArticles }: LatestArticlesProps) {
    const [articles, setArticles] = useState<Article[]>(initialArticles || []);
    const [loading] = useState(false);

    useEffect(() => {
        if (initialArticles) {
            setArticles(initialArticles.slice(0, 3));
        }
    }, [initialArticles]);

    if (loading) {
        return (
            <section id="articles" className="min-h-screen py-24 px-5 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <div className="animate-pulse">
                        <div className="h-12 bg-white/10 rounded mb-16 w-64 mx-auto"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 p-8">
                                    <div className="h-48 bg-white/10 rounded mb-4"></div>
                                    <div className="h-6 bg-white/10 rounded mb-2"></div>
                                    <div className="h-4 bg-white/10 rounded mb-4 w-3/4"></div>
                                    <div className="h-4 bg-white/10 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="articles" className="min-h-screen py-24 px-5 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 lg:mb-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-on-scroll">
                        Latest Articles
                    </h2>
                    <Link 
                        href="/articles" 
                        className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                    >
                        See All Articles
                    </Link>
                </div>

                <div className={`grid gap-8 ${
                    articles.length === 1
                        ? 'grid-cols-1 max-w-md mx-auto'
                        : articles.length === 2
                        ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                    {articles.map((article, index) => (
                        <div key={article.id} className={`animate-scale stagger-delay-${index + 1}`}>
                            <ArticleCard article={article} />
                        </div>
                    ))}
                    {articles.length < 3 && (
                        <div className={`animate-scale stagger-delay-${articles.length + 1} bg-white/3 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center ${
                            articles.length === 1 ? 'hidden' : ''
                        }`}>
                            <span className="text-3xl opacity-30">✍️</span>
                            <p className="text-sm text-foreground/40">More articles coming soon</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
