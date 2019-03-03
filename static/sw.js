importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2178c4607f6d79a12da6.js",
    "revision": "15193d989133fab2457208b3dd88ab5c"
  },
  {
    "url": "/_nuxt/4284c90ec4022c7f03d3.js",
    "revision": "c7cf90d200d5d49052d7cac0bf65a407"
  },
  {
    "url": "/_nuxt/42e3ec7f6bfa3305c25c.js",
    "revision": "d173be9ed3946f4da10954b2a04c783c"
  },
  {
    "url": "/_nuxt/45c86e28d7a80259f742.js",
    "revision": "3b15b37ba0a69ff9993b5c78eeb66c86"
  },
  {
    "url": "/_nuxt/6d78f984a2ab359f80a5.js",
    "revision": "46d774fcd09f30a15a962b356a04f2cf"
  },
  {
    "url": "/_nuxt/6f51976ad608dabea7fc.js",
    "revision": "c691dd7a890bd68be05923d66460f661"
  },
  {
    "url": "/_nuxt/7ed444a0db7b644f5e5b.js",
    "revision": "e74685ef14b30262777a5d6d09c45b65"
  },
  {
    "url": "/_nuxt/ae3de4609a2782c8f9e3.js",
    "revision": "a68284baad9a28a0e26a6f954970ed95"
  },
  {
    "url": "/_nuxt/cb9ecdb7e8dd3cc56a3a.js",
    "revision": "8c4f0a2f4fe36671afec933ab6feb59d"
  },
  {
    "url": "/_nuxt/e2dee375dbb8c15a2b37.js",
    "revision": "ccd88f3172864c0b33c8f3587fb778d4"
  },
  {
    "url": "/_nuxt/f4af6b17a5433a634a0d.js",
    "revision": "2a833e1234c5eb4d9e7a8bc73f427dbb"
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





