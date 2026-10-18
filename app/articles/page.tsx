import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import ScrollProgress from '@/components/ScrollProgress';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Particles from '@/components/Particles';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Motion';

export const metadata: Metadata = {
    title: 'Technical Articles | Omar Gamal',
    description: 'Technical writing and deep-dives on systems programming, distributed systems, and software engineering by Omar Gamal.',
    alternates: {
        canonical: 'https://omar0gamal.vercel.app/articles',
    },
    openGraph: {
        title: 'Technical Articles | Omar Gamal',
        description: 'Technical writing and deep-dives on systems programming, distributed systems, and software engineering.',
        url: 'https://omar0gamal.vercel.app/articles',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Technical Articles - Omar Gamal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technical Articles | Omar Gamal',
        description: 'Technical writing and deep-dives on systems programming, distributed systems, and software engineering.',
        images: ['/og-image.jpg'],
    },
};

export default async function ArticlesPage() {
    const articles = await getAllArticles();

    return (
        <>
            <ScrollProgress />
            <BackgroundAnimation />
            <Particles />
            <div className="fixed top-6 left-6 z-50">
                <Link 
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 font-medium rounded-xl shadow-lg hover:bg-black/30 hover:border-white/20 transform hover:scale-105 transition-all duration-300 group"
                >
                    <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
            <section className="min-h-screen py-24 px-5 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <FadeIn direction="up">
                        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 lg:mb-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                All Articles
                            </h1>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <StaggerItem key={article.slug}>
                                <ArticleCard article={article} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
