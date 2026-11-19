const titleSuffix = 'Kummer umwelt:kommunikation'

type HeadTag = {
  tag: string
  textContent?: string
  props: Record<string, string>
}

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const error = useError()
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')

  useHead(() => {
    if (error.value) return {}

    const path = route.path || '/'
    const href = path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`

    return {
      titleTemplate: path === '/'
        ? undefined
        : (title?: string) => {
            if (!title) return titleSuffix
            if (title.includes(titleSuffix)) return title
            return `${title} - ${titleSuffix}`
          },
      link: [{ rel: 'canonical', href, key: 'canonical' }]
    }
  })

  injectHead().use({
    key: 'open-graph',
    hooks: {
      'tags:afterResolve'(ctx: { tags: HeadTag[] }) {
        const tags = ctx.tags
        const title = tags.find(tag => tag.tag === 'title')?.textContent
        const description = tags.find(tag => tag.tag === 'meta' && tag.props.name === 'description')?.props.content
        const url = tags.find(tag => tag.tag === 'link' && tag.props.rel === 'canonical')?.props.href
        if (!title || !url) return

        const present = new Set(
          tags.filter(tag => tag.tag === 'meta' && tag.props.property).map(tag => tag.props.property)
        )
        const add = (property: string, content?: string) => {
          if (!content || present.has(property)) return
          tags.push({ tag: 'meta', props: { property, content } })
        }

        add('og:title', title)
        add('og:description', description)
        add('og:url', url)
        add('og:type', 'website')
        add('og:locale', 'de_DE')
        add('og:site_name', titleSuffix)
        add('og:image', `${siteUrl}/og-image.jpg`)
        add('og:image:width', '1200')
        add('og:image:height', '629')
        add('og:image:type', 'image/jpeg')
        add('og:image:alt', 'Dr. Beate Kummer, Umweltberatung und Umweltkommunikation')
      }
    }
  })
})
