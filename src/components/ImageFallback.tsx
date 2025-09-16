'use client'

import { useEffect, useRef, useState } from 'react'

import Image, { ImageProps } from 'next/image'

interface IProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}

export default function ImageWithFallback({ src, fallbackSrc, alt, className = '', ...rest }: IProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const blurredImageDivRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (src) setImgSrc(src)
  }, [src])

  if (!imgSrc) return null

  return (
    <div className={`blur-img ${className}`} ref={blurredImageDivRef}>
      <Image
        {...rest}
        src={imgSrc}
        alt={alt}
        sizes="100vw"
        quality={100}
        onError={() => setImgSrc(fallbackSrc)}
        onLoadingComplete={() => blurredImageDivRef.current?.classList.add('loaded')}
      />
    </div>
  )
}
