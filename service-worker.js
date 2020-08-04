importScripts("./precache-manifest.e8ea711074a980ea7e81a49b583ca80b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */ 
// eslint-disable-next-line no-restricted-globals

workbox.setConfig({ debug: false });
self.addEventListener('launch', () => {
    // wait for this to happen.
});
 
self.addEventListener('install', (e) => {
    // console.log(self.__precacheManifest);
    console.log('install')
});

self.addEventListener('activate', (event) => {
    console.log('active')
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SW.SKIP_WAITING') {
        console.log('service worker receive skip wating message');
        self.skipWaiting();
        event.source.postMessage({type: 'SW.UPDATE'});
    }
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
