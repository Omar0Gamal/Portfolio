'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function ScrollSpyToc({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isOutOfView, setIsOutOfView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offsets = toc.map(item => {
        const el = document.getElementById(item.id)
        return {
          id: item.id,
          top: el?.getBoundingClientRect().top ?? Infinity,
        }
      })

      const inView = offsets
        .filter(item => item.top < window.innerHeight * 0.3)
        .sort((a, b) => b.top - a.top)

      if (inView.length > 0) setActiveId(inView[0].id)

      // Check if we've scrolled past the TOC content area
      const firstHeading = document.getElementById(toc[0]?.id)
      const lastHeading = document.getElementById(toc[toc.length - 1]?.id)
      
      if (firstHeading && lastHeading) {
        const firstRect = firstHeading.getBoundingClientRect()
        const lastRect = lastHeading.getBoundingClientRect()
        // Show full-width bar if we've scrolled past all headings or before the first heading
        setIsOutOfView(firstRect.top > window.innerHeight || lastRect.bottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  return (
    <>
      <aside className="scrollspy-container sticky top-20 hidden lg:block w-64 max-h-[80vh] overflow-y-auto text-sm pr-4 border-r border-white/10 backdrop-blur-md bg-black/10 modal-scrollbar">
        <h2 className="font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          On this page
        </h2>
        <ul className="space-y-2">
          {toc.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  'block hover:text-primary transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/5 hover:scale-105 transform',
                  item.level === 3 ? 'ml-4 text-sm' : '',
                  activeId === item.id 
                    ? 'text-primary font-semibold bg-white/10 border-l-2 border-primary shadow-lg' 
                    : 'text-white/70 hover:text-white/90'
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Full-width bar when out of view */}
      {isOutOfView && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 p-4">
          <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-semibold text-primary whitespace-nowrap">On this page:</span>
            {toc.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={clsx(
                  'text-sm whitespace-nowrap px-3 py-1 rounded-lg transition-all duration-300',
                  activeId === item.id 
                    ? 'text-primary font-semibold bg-white/10' 
                    : 'text-white/70 hover:text-white/90 hover:bg-white/5'
                )}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-scrollbar::-webkit-scrollbar { width: 8px; }
        .modal-scrollbar::-webkit-scrollbar-track { background: transparent; border-radius: 10px; }
        .modal-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(0, 245, 255, 0.3); 
          border-radius: 10px; 
          border: 2px solid transparent; 
          background-clip: content-box; 
        }
        .modal-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(0, 245, 255, 0.5); 
          background-clip: content-box; 
        }
      `}</style>
    </>
  )
}
