importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ddff2226835eeec7402.js",
    "revision": "9243a5e26999b4c1577d5c425081e35e"
  },
  {
    "url": "/_nuxt/0ee5925b39b2913e7b99.js",
    "revision": "854ea9957b673fa1de8cab69338a7544"
  },
  {
    "url": "/_nuxt/24bc3cc98a318e4c6940.js",
    "revision": "b54f6973fb273a4b9b58d96a835c64cf"
  },
  {
    "url": "/_nuxt/45c86e28d7a80259f742.js",
    "revision": "3b15b37ba0a69ff9993b5c78eeb66c86"
  },
  {
    "url": "/_nuxt/4ea1e0415412d36cad53.js",
    "revision": "5c3a85f52b125ccf3bf0cb6cca3acd41"
  },
  {
    "url": "/_nuxt/55cac26c9afff3a148d5.js",
    "revision": "149145811d66304c466b097d65bd10d1"
  },
  {
    "url": "/_nuxt/6fc7c6ff83ebc4e324ba.js",
    "revision": "6e43f8ec86652f47bca09b788f1bef9a"
  },
  {
    "url": "/_nuxt/71370a0ae734a4813e77.js",
    "revision": "202143901b146757011c1a102ef67d50"
  },
  {
    "url": "/_nuxt/8292a79c8d6d2505c188.js",
    "revision": "4eb75e79b1bca5c9652e9eb60bb8a59a"
  },
  {
    "url": "/_nuxt/a547d0549f1b2032d6bf.js",
    "revision": "ed2c3da7271695306d66d43e20ac9189"
  },
  {
    "url": "/_nuxt/ce0b1216a9872e369bc6.js",
    "revision": "c51eb764a071f1d66a072a8b2b6c2b26"
  }
], {
  "cacheId": "business-website",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





