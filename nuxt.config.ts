export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'kummer umwelt:kommunikation',
      meta: [
        { name: 'description', content: 'Umweltberatung und Umweltkommunikation. Dr. Beate Kummer berät Unternehmen zu Umweltrecht, Nachhaltigkeit und Kommunikation.' }
      ]
    }
  }
})
