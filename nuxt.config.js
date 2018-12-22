const pkg = require('./package')

module.exports = {
  cache: true,
  mode: 'universal',

  manifest: {
    lang: 'pl',
    name: 'Jakub Gania - Full Stack Web Developer',
    description: 'Jakub Gania - Full Stack Web Developer. Vue.js, Vuex, Vuetify, NUXT, HTML, CSS, Node.js, PHP, Laravel, Nginx, Docker.',
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#000000",
    background_color: "#000000",
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: "#000000" },
      { name: 'google-site-verification', content: 'pCgwKh6Bl0udfAQC8PP37yLs6Rs26hwU19gmuDgpnZs' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
    ]
  },

  loading: { color: '#304FFE' },

  css: [
    '~/assets/style/app.styl',
    'aos/dist/aos.css'
  ],

  plugins: [
    '@/plugins/vuetify',
    { src:"~/plugins/aos", ssr: false },
    { src: '~plugins/ga.js', ssr: false },
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  build: {
    extend(config, ctx) {

    }
  }
}
