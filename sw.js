importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ea48c4c6e58df8cb960.js",
    "revision": "0d8c7e43d2e601ea72006769d149b212"
  },
  {
    "url": "/_nuxt/3151de0968d20679305e.js",
    "revision": "ec32cf899f194b69789aad1305696a66"
  },
  {
    "url": "/_nuxt/359eec2a54c3c7d3d45e.js",
    "revision": "bb76ad476ffcbf4277d33d0ac4836f27"
  },
  {
    "url": "/_nuxt/39e5073add35c6d4bcc2.js",
    "revision": "677e0ae0429e3145ab02de0c2b1b790e"
  },
  {
    "url": "/_nuxt/42459fce124e6caaaa9c.js",
    "revision": "fe73b7f523221ea2517106be7bd1a2b1"
  },
  {
    "url": "/_nuxt/50c5eb9d507dfe37da5e.js",
    "revision": "c2458a4b4cb645de374c6461b417501a"
  },
  {
    "url": "/_nuxt/557031853c64ff341bf3.js",
    "revision": "dad5ca93a462672939cfe41275d12008"
  },
  {
    "url": "/_nuxt/5849cde7f23055c98f74.js",
    "revision": "071087f5ad206192e962ea652f28509f"
  },
  {
    "url": "/_nuxt/596c99e6199b43482841.js",
    "revision": "2a931e67f577bebfb73c6477bf2bd8ba"
  },
  {
    "url": "/_nuxt/7bf1c6ccedac65bef49d.js",
    "revision": "cf069b688e6da3466a61fa69252badef"
  },
  {
    "url": "/_nuxt/a4cb24c700cfed01109c.js",
    "revision": "b489bdcb8d5369df55477771840ace8f"
  },
  {
    "url": "/_nuxt/b90f1065f359e82cab35.js",
    "revision": "ad5bf4db7ecdc6a8c31819dc35cccc2f"
  },
  {
    "url": "/_nuxt/ba720ca20a79664f6387.js",
    "revision": "4f6da0aba1a9670452d28eef0ca6285c"
  },
  {
    "url": "/_nuxt/bed20c4e710ac00ef5c2.js",
    "revision": "6e578975e3c71a8ca44dfae1804483f4"
  },
  {
    "url": "/_nuxt/e4f32be997b38a77628f.js",
    "revision": "be2e71407c624def1236abab3d45742b"
  },
  {
    "url": "/_nuxt/e6861f129d190d08255f.js",
    "revision": "d825c27c83c8fbe3652f0beadc5d6b87"
  },
  {
    "url": "/_nuxt/f001a55e8c11f4e10a14.js",
    "revision": "45400f302edb7ff5765b42c939559428"
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
