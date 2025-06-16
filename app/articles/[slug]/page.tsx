import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { cache } from 'react'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles'
import 'highlight.js/styles/github-dark.css'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import Particles from '@/components/Particles'
import ArticleC from '@/components/Article'
import Link from 'next/link'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

const getArticle = cache(async (slug: string) => {
    return await getArticleBySlug(slug)
})

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params
    const data = await getArticle(resolvedParams.slug)
    if (!data) {
        return { 
            title: 'Article Not Found', 
            description: 'The requested article could not be found.' 
        }
    }

    const { article } = data
    
    const plainTextContent = article.content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    
    const description = article.excerpt || 
        (plainTextContent.length > 160 
            ? `${plainTextContent.substring(0, 157)}...` 
            : plainTextContent)

    return {
        title: `${article.title} | Your Blog`,
        description,
        authors: article.author ? [{ name: article.author }] : undefined,
        keywords: Array.isArray(article.tags) ? article.tags : undefined,
        openGraph: {
            title: article.title,
            description,
            type: 'article',
            publishedTime: article.publishedAt,
            authors: article.author ? [article.author] : undefined,
            tags: Array.isArray(article.tags) ? article.tags : undefined
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description
        }
    }
}

export default async function ArticlePage({ params }: PageProps) {
    const resolvedParams = await params;
    const data = await getArticle(resolvedParams.slug);
    if (!data) notFound()

    return (
        <>
            <BackgroundAnimation />
            <Particles />
            <div className="fixed top-5 left-8 z-50">
                <Link 
                    href="/articles"
                    className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 font-medium rounded-xl shadow-lg hover:bg-black/30 hover:border-white/20 transform hover:scale-105 transition-all duration-300 group"
                >
                    <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Articles
                </Link>
            </div>

            <ArticleC article={data} />
        </>
    )
}

export async function generateStaticParams() {
    try {
        const slugs = getAllArticleSlugs()
        return slugs.map(slug => ({ slug }))
    } catch (error) {
        console.error('Error generating static params:', error)
        return []
    }
}
