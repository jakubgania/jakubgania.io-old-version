importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03a2e37f8f5ffd812cee.js",
    "revision": "374010f0d169b7346600ed0f69e9325c"
  },
  {
    "url": "/_nuxt/1caa93621b0f76281794.js",
    "revision": "9d2ff505aec4f937fbfcfac1abfcd194"
  },
  {
    "url": "/_nuxt/2480f0514d66e25f868b.js",
    "revision": "1b5dd08a6021113ace6c962f378e2617"
  },
  {
    "url": "/_nuxt/40150fc3789dac0e7950.js",
    "revision": "737975f74c79b13e6ffe624f632df711"
  },
  {
    "url": "/_nuxt/7ed4361f904f934325cd.js",
    "revision": "6565fc24180cd0f26832a6496b20f0f8"
  },
  {
    "url": "/_nuxt/9032f74ca9f0abef899e.js",
    "revision": "63161f9d908fc7749a59a43774f9ef7c"
  },
  {
    "url": "/_nuxt/9174347ba722bfa57a8a.js",
    "revision": "022012cd73abcc333346d87cbb6871c4"
  },
  {
    "url": "/_nuxt/95dbf78e24794245c1c6.js",
    "revision": "a641c1648045785f53ea68a26b53145a"
  },
  {
    "url": "/_nuxt/c724a08106db8b032f95.js",
    "revision": "152d4f1c4f26add577c7872bcd72a6a0"
  },
  {
    "url": "/_nuxt/e17af07de4bdb591cf6d.js",
    "revision": "b45eb7e17ae1777845610acbaf614d6a"
  },
  {
    "url": "/_nuxt/fcb2abec42c0085db13e.js",
    "revision": "f9f5466a7d1137c07292d1681ce239c8"
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





