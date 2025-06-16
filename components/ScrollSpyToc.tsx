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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  return (
    <>
      {/* Desktop sidebar */}
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

      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-black/80 backdrop-blur-md p-2 rounded-lg border border-white/10"
        aria-label="Toggle table of contents"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={clsx(
            'block h-0.5 w-6 bg-white transition-all duration-300',
            isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'translate-y-0'
          )} />
          <span className={clsx(
            'block h-0.5 w-6 bg-white transition-all duration-300 mt-1',
            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
          )} />
          <span className={clsx(
            'block h-0.5 w-6 bg-white transition-all duration-300 mt-1',
            isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0'
          )} />
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 right-4 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg p-4 max-w-xs w-full max-h-[70vh] overflow-y-auto modal-scrollbar">
            <h2 className="font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              On this page
            </h2>
            <ul className="space-y-2">
              {toc.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      'block hover:text-primary transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/5',
                      item.level === 3 ? 'ml-4 text-sm' : '',
                      activeId === item.id 
                        ? 'text-primary font-semibold bg-white/10 border-l-2 border-primary' 
                        : 'text-white/70 hover:text-white/90'
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
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
