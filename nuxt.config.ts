// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/gtag.client.js', mode: 'client' },
  ],
  modules: [
    '@zadigetvoltaire/nuxt-gtm'
  ],
  gtm: {
    id: 'GTM-PPN85KR',
    queryParams: {
      gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x',
    },
    defer: false,
    compatibility: false,
    nonce: '2726c7f26c',
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['pageOne', 'SecondPage'],
    trackOnNextTick: false,
    devtools: true,
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-PPN85KR',
        queryParams: {
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false,
        compatibility: false,
        nonce: '2726c7f26c',
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ['homepage'],
        trackOnNextTick: false,
        devtools: true,
      },
      gtag: {
        id: 'G-TVZMZJ6794'
      }
    }
  },
})
