import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import './globals.css'

import Layout from '@/components/Layout'

import { pages } from './sitemap'
import { base_url, ga_id, siteMetadata } from '../utils'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  authors: [{ name: siteMetadata.author, url: base_url }],
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: '/',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    type: 'website',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/sitemap.xml`,
    },
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  other: {
    'virtual-protocol-site-verification': '12549aa3e2be4a58130f8f6f12333985',
  },
}

const jsonLd = [
  {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    image: siteMetadata.socialBanner,
    url: base_url,
    logo: siteMetadata.siteLogo,
    name: siteMetadata.author,
    description: siteMetadata.description,
    email: siteMetadata.email,
    sameAs: [pages.map((item) => `${base_url}/${item}`)],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3A Pho Quang, F2',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'VN',
      addressRegion: 'Vietnam',
      postalCode: '70000',
    },
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <GoogleAnalytics gaId={ga_id as string} />
    </html>
  )
}
