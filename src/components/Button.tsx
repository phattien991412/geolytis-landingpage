'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  const refButton = useRef<HTMLDivElement>(null)
  const gsapAnimation = useRef<gsap.core.Tween | null>(null)
  gsap.set(refButton.current, {
    perspective: 1000,
  })
  useGSAP(() => {
    gsapAnimation.current = gsap.to(refButton.current, {
      y: -64,
      z: -64,
      paused: true,
    })
  })

  const handleMouseEnter = (isEnter: boolean) => {
    if (!gsapAnimation.current) return
    if (isEnter) return gsapAnimation.current.play()
    return gsapAnimation.current.reverse()
  }

  return (
    <button
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseEnter(false)}
      {...props}
      className={cn('cursor-pointer overflow-hidden', className)}
    >
      <div ref={refButton} className="btn-content relative">
        <div>{children}</div>
        <div className="absolute-center-x top-16 w-full">{children}</div>
      </div>
    </button>
  )
}

export default Button
