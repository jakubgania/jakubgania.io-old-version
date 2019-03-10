importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05ee5e2bf39ddfbab58b.js",
    "revision": "21705d1014b9ceb1a9f492e15aecba56"
  },
  {
    "url": "/_nuxt/07aa09042424bcbce133.js",
    "revision": "82010ec358cdd00626252883f74f33f8"
  },
  {
    "url": "/_nuxt/0f5588bb6aa1999afcf1.js",
    "revision": "0501548f2071c597ed32b7bccfc9cf79"
  },
  {
    "url": "/_nuxt/246d50d39d8d1ebb365d.js",
    "revision": "6c24d71d1004c1467bd3e50538c46863"
  },
  {
    "url": "/_nuxt/3eb4cf6f3aa6babce967.js",
    "revision": "e986232a49c06c7f77c8155c03117d61"
  },
  {
    "url": "/_nuxt/516b11ac1851de30e6cc.js",
    "revision": "c12ea5d94e85ef9646ca272c6fecfad7"
  },
  {
    "url": "/_nuxt/56a92c57fac24ed94176.js",
    "revision": "46b4cd30edc39a0f27a324d22471adf7"
  },
  {
    "url": "/_nuxt/6cd1991a508517fa4c6f.js",
    "revision": "043bd3a7d15c754753e1291ea35c854e"
  },
  {
    "url": "/_nuxt/8165c06edd53373e472b.js",
    "revision": "cb6da35500ad1e2c38d161994ca0e62a"
  },
  {
    "url": "/_nuxt/84bed6d6603012db7b68.js",
    "revision": "788c21054ebd74beae280bc49c7f7bc0"
  },
  {
    "url": "/_nuxt/983eb0960b082d50dd83.js",
    "revision": "d52aba30ddb5fc1776873c006a64af50"
  },
  {
    "url": "/_nuxt/98d77d8694b23dc73e94.js",
    "revision": "351dcccb3fd68fc130e278806b72208d"
  },
  {
    "url": "/_nuxt/9fafc598a838238632a8.js",
    "revision": "dfe31db3ffd67f18fe842c498f4b901d"
  },
  {
    "url": "/_nuxt/c8ef302e8c39ef1d7e96.js",
    "revision": "6d9c941863700aaf7adb103e23db911b"
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





