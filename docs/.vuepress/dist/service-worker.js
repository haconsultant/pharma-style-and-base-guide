/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "21f5cadb8d460473679b79e493246118"
  },
  {
    "url": "assets/css/0.styles.09628a9d.css",
    "revision": "d3401a99f8060e182f49b24cedb46384"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.30c0be3a.js",
    "revision": "aab62d58a5fea920437db4c299dc1cb2"
  },
  {
    "url": "assets/js/4.8ccfffa3.js",
    "revision": "d198473123ffad7cdf9bc57b8cd22841"
  },
  {
    "url": "assets/js/5.38687a05.js",
    "revision": "b2289c65fd8765b1762061fae1fbc723"
  },
  {
    "url": "assets/js/6.8567c72e.js",
    "revision": "4dd2ed20128d9beb9e18f0bfec273871"
  },
  {
    "url": "assets/js/7.3c7d3a4e.js",
    "revision": "7a6f7360fed00c78a6654ef0f80e26f9"
  },
  {
    "url": "assets/js/8.d92d0dcd.js",
    "revision": "d9538abf36e4d5aacd930513b36b68d0"
  },
  {
    "url": "assets/js/app.9a2e0ec3.js",
    "revision": "0bfbd53b44c80adcbf2737c0950d4f55"
  },
  {
    "url": "hero.png",
    "revision": "929265787b224f35a39f43f1063926e9"
  },
  {
    "url": "index.html",
    "revision": "8cdc7c3ab7ca57e7d89e5babd02dc021"
  },
  {
    "url": "intro.html",
    "revision": "786d5c2318254bfff32bdab2f575cbf4"
  },
  {
    "url": "Page-3.html",
    "revision": "7dc1f219d302281cfd307ad704cd8301"
  },
  {
    "url": "Page-4.html",
    "revision": "9504b70b6f296021d2db555cf502ec66"
  },
  {
    "url": "style_guides.html",
    "revision": "f999ccc288b358d160166050e7979055"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
