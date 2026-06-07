'use client'
import { useRef } from 'react'

export default function HeroSpotlight({ children }: { children: React.ReactNode }) {
  const spotRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (spotRef.current) {
      spotRef.current.style.left = `${x}px`
      spotRef.current.style.top = `${y}px`
      spotRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (spotRef.current) {
      spotRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={spotRef} className="hero-spotlight" />
      {children}
    </div>
  )
}
