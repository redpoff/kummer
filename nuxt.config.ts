export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://beate-kummer.de'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'kummer umwelt:kommunikation',
      meta: [
        { name: 'description', content: 'Umweltberatung und Umweltkommunikation. Dr. Beate Kummer berät Unternehmen zu Umweltrecht, Nachhaltigkeit und Kommunikation.' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/mstile-150x150.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#273a20' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
