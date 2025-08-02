import { MetadataRoute } from 'next'

import { siteMetadata } from '../utils'

export const pages = ['']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl

  const allPages = pages.map((page) => `${siteUrl}/${page}`)
  const siteMapList = [...allPages].sort()

  return siteMapList.map((s) => ({
    url: `${s}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.7,
  }))
}
