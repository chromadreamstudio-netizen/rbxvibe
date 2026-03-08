import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rbxvibe.com'

  // الصفحات الرئيسية والأدوات (أهمية عالية)
  const mainRoutes = [
    '',
    '/roblox-codes',
    '/fortnite-maps',
    '/sensitivity',
    '/deals',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  // صفحات الألعاب (أهمية متوسطة)
  const gameRoutes = [
    '/ai-game',
    '/trivia',
    '/reaction-test',
    '/aim-trainer',
    '/cps-test',
    '/memory-game',
    '/typing-test',
    '/tic-tac-toe',
    '/spacebar-test',
    '/snake-game',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...mainRoutes, ...gameRoutes]
}