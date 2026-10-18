import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })


 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar Gamal',
  jobTitle: 'Backend, Cloud & Full-Stack Engineer',
  url: 'https://omar0gamal.vercel.app',
  sameAs: [
    'https://github.com/Omar0Gamal',
    'https://www.linkedin.com/in/omar-gamal-091044168/',
  ],
  description:
    'Backend, Cloud & Full-Stack Engineer specializing in distributed systems, Go, Kubernetes, and modern full-stack web applications.',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://omar0gamal.vercel.app'),
  alternates: {
    canonical: 'https://omar0gamal.vercel.app',
  },
  title: {
    default: 'Omar Gamal - Backend, Cloud & Full-Stack Engineer',
    template: '%s | Omar Gamal'
  },
  description: 'Backend, Cloud & Full-Stack Engineer specializing in distributed systems, Go, Kubernetes, and modern full-stack applications.',
  keywords: [
    'Omar Gamal',
    'backend engineer',
    'cloud engineer',
    'full-stack',
    'distributed systems',
    'Go',
    'Golang',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Helm',
    'Next.js',
    'TypeScript',
    'Cloudflare Workers',
    'Prisma',
    'PostgreSQL',
    'C++',
  ],
  authors: [{ name: 'Omar Gamal' }],
  creator: 'Omar Gamal',
  publisher: 'Omar Gamal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omar0gamal.vercel.app',
    siteName: 'Omar Gamal Portfolio',
    title: 'Omar Gamal - Backend, Cloud & Full-Stack Engineer',
    description: 'Backend, Cloud & Full-Stack Engineer specializing in distributed systems, Go, Kubernetes, and modern full-stack applications.',
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
    title: 'Omar Gamal - Backend, Cloud & Full-Stack Engineer',
    description: 'Backend, Cloud & Full-Stack Engineer specializing in distributed systems, Go, Kubernetes, and modern full-stack applications.',
    images: ['/og-image.jpg'],
    creator: '@OmarGam76954896',
  },
  other: {
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'Omar Gamal - Backend, Cloud & Full-Stack Engineer',
    'linkedin:description': 'Backend, Cloud & Full-Stack Engineer specializing in distributed systems, Go, Kubernetes, and modern full-stack applications.',
    'linkedin:image': 'https://omar0gamal.vercel.app/og-image.jpg',
    'linkedin:url': 'https://omar0gamal.vercel.app',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.className} font-sf bg-dark text-light leading-relaxed overflow-x-hidden scrollbar-none`}>
        {children}
        <Toaster position="bottom-right" richColors theme="dark" />
        <Analytics />
      </body>
    </html>
  )
}
