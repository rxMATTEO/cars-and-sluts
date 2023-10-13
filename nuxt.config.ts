export const byApiDomain = 'api.atlas-probeg.ru';
export const newApiDomain = 'api.atlas-dealer.ru';
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        { charset: 'UTF-8' },
        { name: 'theme-color', content: '#416388' },
        { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'mask-icon', href: '/mask-icon.svg', color: '#416388' },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'apple-touch-icon',
          href: 'https://www.atlas-dealer.ru/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-512x512.png',
          type: 'image/png',
          sizes: '512x512',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-120x120-precomposed.png',
          type: 'image/png',
          sizes: '120x120',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-120x120.png',
          type: 'image/png',
          sizes: '120x120',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@pinia/nuxt', '@nuxt/image'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://${byApiDomain}/graphql`,
      },
      new: {
        httpEndpoint: `https://${newApiDomain}/graphql`,
      },
    },
  },
});
