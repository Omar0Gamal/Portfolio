import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omargamal.engineer'
  
  // Get all articles
  const articlesDirectory = path.join(process.cwd(), 'content/articles')
  let articles: string[] = []
  
  try {
    articles = fs.readdirSync(articlesDirectory)
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading articles directory:', error)
  }
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  const articlePages = articles.map(slug => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...articlePages]
}