importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1cd34fac4783055bc07f.js",
    "revision": "20d954ac81eded67f085102bf649626c"
  },
  {
    "url": "/_nuxt/33d8d1788625a45510ba.js",
    "revision": "706ef11f3e272f5d6aa78e111f386509"
  },
  {
    "url": "/_nuxt/3a2079a705b96ce9af16.js",
    "revision": "55e2d88fe30bf5b75dd7cefa6c771050"
  },
  {
    "url": "/_nuxt/4c45a3e42579c6e3e4f8.js",
    "revision": "51b84ea8b05d8b3c3c7500e5a9611cfa"
  },
  {
    "url": "/_nuxt/6dedc157f32017c42517.js",
    "revision": "2ff591b25d3b1bb381f3747770911f8a"
  },
  {
    "url": "/_nuxt/70121ce0dd692252e3a3.js",
    "revision": "f3e5c671564852a0914fc01f00ab879f"
  },
  {
    "url": "/_nuxt/875cd5344a26ed90298b.js",
    "revision": "3b3ee5f333b7b4998f348e11768f7e32"
  },
  {
    "url": "/_nuxt/8813293fbbc03efbdddd.js",
    "revision": "86a9f8ea0e23b265189ad30d1615821a"
  },
  {
    "url": "/_nuxt/ae2f57d8e64c5102c357.js",
    "revision": "f29d9f0435dd20a84291ee2eeccbb6f7"
  },
  {
    "url": "/_nuxt/b40af43908dca4296dcb.js",
    "revision": "a394aab48e410f1ae46dda4fe80657c2"
  },
  {
    "url": "/_nuxt/bc1c0302abeee43083df.js",
    "revision": "ea5ceb91bec8a4e4bf572b6fb327ab38"
  },
  {
    "url": "/_nuxt/c22f7dc0f04b50940337.js",
    "revision": "d108713602098ab823b20639d9f4e18f"
  },
  {
    "url": "/_nuxt/f3cbd67838f6d14d2eee.js",
    "revision": "e115899b1293d7defbc42be60203a782"
  },
  {
    "url": "/_nuxt/fb934f6e115db3da0c3f.js",
    "revision": "9eba1cd815b845a7d0bcae5bd9796231"
  },
  {
    "url": "/_nuxt/fe27a499dabddd868717.js",
    "revision": "71035176c3f896028fcfd206d8a92d68"
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





