'use client'
import { useRef, useEffect } from 'react'

export default function HeroSpotlight({ children }: { children: React.ReactNode }) {
  const spotRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      // only active while mouse is within section vertical bounds
      if (e.clientY < rect.top || e.clientY > rect.bottom) return
      if (spotRef.current) {
        // x/y relative to the full-width section
        spotRef.current.style.left = `${e.clientX}px`
        spotRef.current.style.top = `${e.clientY - rect.top}px`
        spotRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (spotRef.current) spotRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
      {/* spotlight lives at section level — full viewport width */}
      <div ref={spotRef} className="hero-spotlight" />
      <div className="hero">
        {children}
      </div>
    </section>
  )
}
