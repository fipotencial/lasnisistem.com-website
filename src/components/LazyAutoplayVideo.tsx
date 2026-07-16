'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  poster: string
  className?: string
}

export default function LazyAutoplayVideo({ src, poster, className }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const element = wrapperRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return
    void videoRef.current.play().catch(() => {
      // Autoplay can be blocked by browser or OS settings; the poster remains visible.
    })
  }, [shouldLoad])

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        className={className}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />
    </div>
  )
}
