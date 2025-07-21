'use client'

import React, { useEffect, useRef } from 'react'

// import { useSignalEffect } from '@preact/signals-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
// import { PageStatus, pageStatus } from './Layout/Animate/usePageStatus'

export default function LenisScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)
  const easingScrolling = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  useEffect(() => {
    const update = (time: number): void => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    // lenisRef.current?.lenis?.on('scroll', ScrollTrigger.update)
    gsap.ticker.lagSmoothing(0)
    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  useLenis(ScrollTrigger.update)

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{
        duration: 2,
        lerp: 0.05,
        easing: easingScrolling,
        // syncTouch: true,
        // syncTouchLerp: 0.025,
      }}
    >
      {children}
    </ReactLenis>
  )
}
