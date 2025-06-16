import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://omargamal.dev'),
  title: {
    default: 'Omar Gamal - Software Engineer & Game Engine Developer',
    template: '%s | Omar Gamal Portfolio'
  },
  description: 'Software Engineer & Game Engine Developer with 7+ years experience in full-stack development, C++, DirectX, Unity, React, and enterprise solutions. Specializing in high-performance game engines and scalable web applications.',
  keywords: [
    'software engineer',
    'game engine developer',
    'full-stack developer',
    'C++',
    'DirectX',
    'Unity',
    'React',
    'TypeScript',
    'game development',
    'web development',
    'Omar Gamal'
  ],
  authors: [{ name: 'Omar Gamal' }],
  creator: 'Omar Gamal',
  publisher: 'Omar Gamal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omargamal.dev',
    siteName: 'Omar Gamal Portfolio',
    title: 'Omar Gamal - Software Engineer & Game Engine Developer',
    description: 'Software Engineer specializing in game engines, full-stack development, and enterprise solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Omar Gamal Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Gamal - Software Engineer & Game Engine Developer',
    description: 'Senior Software Engineer specializing in game engines and full-stack development.',
    images: ['/og-image.jpg'],
    creator: '@OmarGam76954896',
  },
  other: {
    'linkedin:card': 'summary',
    'linkedin:title': 'Omar Gamal - Software Engineer & Game Engine Developer',
    'linkedin:description': 'Senior Software Engineer with 7+ years experience in game engines, C++, DirectX, Unity, React, and enterprise solutions.',
    'linkedin:image': '/og-image.jpg',
    'linkedin:url': 'https://omargamal.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-none">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#00f5ff" />
      </head>
      <body className={inter.className + "font-sf bg-dark text-light leading-relaxed overflow-x-hidden scrollbar-none"}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
