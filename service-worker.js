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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c207deb2f45c4e1582375ce765c66390"
  },
  {
    "url": "about.html",
    "revision": "34e47a508a9b2dc01a0aaf5ca79df72c"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.c75064f1.js",
    "revision": "ae0a4a91df6c8195b07c89e60cfbef1f"
  },
  {
    "url": "assets/js/13.c23d9012.js",
    "revision": "5a9b871d08107e30445e5622fa81c112"
  },
  {
    "url": "assets/js/14.bfbf9c53.js",
    "revision": "469e175a7f9a456135d0aca95d87852b"
  },
  {
    "url": "assets/js/15.6f01478a.js",
    "revision": "eb3d8d0ccf32ae4896d619a2ab3ca4b0"
  },
  {
    "url": "assets/js/16.68d2fede.js",
    "revision": "d3c4e689e32ee2a8f20cb6d6d0579475"
  },
  {
    "url": "assets/js/17.825b6a0c.js",
    "revision": "deab5fa7ea8d21f212209ad867814b8f"
  },
  {
    "url": "assets/js/18.c1706b00.js",
    "revision": "fb83e7ca065af7a832409b66153ff0a6"
  },
  {
    "url": "assets/js/19.ca2a4db3.js",
    "revision": "b011fda033c268d7c5060937aa71ea1f"
  },
  {
    "url": "assets/js/20.7f89054f.js",
    "revision": "6f66c90f6ee317f65c903a9932c9f010"
  },
  {
    "url": "assets/js/21.4b88b155.js",
    "revision": "4e46738145098c00beebe89bff52faea"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.8e6f5365.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.64252525.js",
    "revision": "b18e3a25d47ecd5419cf0a331d3eeb22"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.bac3baf7.js",
    "revision": "8b6aa11756356bb69fdc58af198f988d"
  },
  {
    "url": "assets/js/9.47377419.js",
    "revision": "6b319a05ea5aafb513881139cfc4cc2e"
  },
  {
    "url": "assets/js/app.458244f2.js",
    "revision": "41cea907b987adff7b03bd165b5a4abf"
  },
  {
    "url": "assets/js/vendors~docsearch.662ea70f.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "323961268598b331e75a50fdcb63de39"
  },
  {
    "url": "guide/about.html",
    "revision": "6f35c9a20b8a7e5f3d6a0326820213ce"
  },
  {
    "url": "guide/feedback.html",
    "revision": "e2e24d6d1a864305da8307ff894cee6c"
  },
  {
    "url": "guide/index.html",
    "revision": "bb5095b7862d95dc85641e14c4498366"
  },
  {
    "url": "guide/webp.html",
    "revision": "05847dbe97843c03546213af428e6435"
  },
  {
    "url": "idc.html",
    "revision": "5fdb9c7e9a631194fdab5bce19964c81"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "f33e8d38d6ac5e9f0f9886471ba1c4f7"
  },
  {
    "url": "releases.html",
    "revision": "3a64f875f824ef47f5b328a269315e2a"
  },
  {
    "url": "sponsors.html",
    "revision": "8f39b8281e9c703119fa2fef80692366"
  }
].concat(self.__precacheManifest || []);
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
