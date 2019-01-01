importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07c4e401fd6fe0cd69a6.js",
    "revision": "c58ca913ed146dad66e55903761a35e2"
  },
  {
    "url": "/_nuxt/1b0376d956eaf04aa43d.js",
    "revision": "67cd81db0f2dd54b1f464f6bf7bde0ce"
  },
  {
    "url": "/_nuxt/2cdbce962744074af5e7.js",
    "revision": "9ea20ca1018f1c8ce71d5184d5751f1c"
  },
  {
    "url": "/_nuxt/3c05d48ee2b40bd5559d.js",
    "revision": "8b0b441be04b61b838053175a4c4f99c"
  },
  {
    "url": "/_nuxt/4722b8ed35ccd74806d4.js",
    "revision": "1c7196726b2b1787e24fba723d0ac952"
  },
  {
    "url": "/_nuxt/574791eb8e0f1ab7eae5.js",
    "revision": "f9199cb9de0cdbb2e90ddab0a6e66e0f"
  },
  {
    "url": "/_nuxt/77faeb2399c03f8fb60f.js",
    "revision": "0efd347da55560ff65fd44a5e3386b60"
  },
  {
    "url": "/_nuxt/7c124c0c1070e9c5f9fc.js",
    "revision": "6ce7f3fbe5d2d0e17817d7176a1460d0"
  },
  {
    "url": "/_nuxt/ba7e09320d4c64531b85.js",
    "revision": "7826430ba2a86761953b93635037f36b"
  },
  {
    "url": "/_nuxt/c607037434f984096267.js",
    "revision": "90686f4daada2e5cb3f4140f1dc74697"
  },
  {
    "url": "/_nuxt/f41efeda9a2b886badfa.js",
    "revision": "1411fc7bc3aea83b1b5f7cf1b92d3063"
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





