import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })


 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://omargamal.engineer'),
  title: {
    default: 'Omar Gamal - Backend & Infrastructure Engineer',
    template: '%s | Omar Gamal Portfolio'
  },
  description: 'Backend & Infrastructure Engineer with experience in Go, Kubernetes, and Distributed Systems. Specializing in highly scalable enterprise microservices.',
  keywords: [
    'software engineer',
    'backend engineer',
    'infrastructure engineer',
    'Go',
    'Golang',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Helm',
    'distributed systems',
    'C++',
    'Omar Gamal'
  ],
  authors: [{ name: 'Omar Gamal' }],
  creator: 'Omar Gamal',
  publisher: 'Omar Gamal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omargamal.engineer',
    siteName: 'Omar Gamal Portfolio',
    title: 'Omar Gamal - Backend & Infrastructure Engineer',
    description: 'Backend & Infrastructure Engineer specializing in Go, Kubernetes, and Distributed Systems.',
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
    title: 'Omar Gamal - Backend & Infrastructure Engineer',
    description: 'Backend & Infrastructure Engineer specializing in Go, Kubernetes, and Distributed Systems.',
    images: ['/og-image.jpg'],
    creator: '@OmarGam76954896',
  },
  other: {
    'linkedin:card': 'summary',
    'linkedin:title': 'Omar Gamal - Backend & Infrastructure Engineer',
    'linkedin:description': 'Backend & Infrastructure Engineer specializing in Go, Kubernetes, and Distributed Systems.',
    'linkedin:image': '/og-image.jpg',
    'linkedin:url': 'https://omargamal.engineer',
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
