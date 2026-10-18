'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaTwitter, FaLinkedin, FaFacebookF, FaLink, FaCheck } from 'react-icons/fa'
import { toast } from 'sonner'

export default function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://omar0gamal.vercel.app'
  const url = `${baseUrl}${pathname}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success('Link copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy link.')
    }
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/70">
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="inline-flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-lg hover:bg-black/30 hover:border-white/20 hover:scale-105 transition-all duration-300"
      >
        <FaTwitter className="text-[#1DA1F2]" /> Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-lg hover:bg-black/30 hover:border-white/20 hover:scale-105 transition-all duration-300"
      >
        <FaLinkedin className="text-[#0077b5]" /> LinkedIn
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-lg hover:bg-black/30 hover:border-white/20 hover:scale-105 transition-all duration-300"
      >
        <FaFacebookF className="text-[#1877f2]" /> Facebook
      </a>
      <button
        onClick={copyToClipboard}
        aria-label="Copy link to clipboard"
        className="inline-flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-lg hover:bg-black/30 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {copied ? (
          <>
            <FaCheck className="text-emerald-400" /> Copied!
          </>
        ) : (
          <>
            <FaLink className="text-primary" /> Copy link
          </>
        )}
      </button>
    </div>
  )
}