import type { MetadataRoute } from 'next'

const routes = ['/']

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return routes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date(),
    priority: 1.0,
  }))
}

export default sitemap
