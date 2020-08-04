importScripts("/precache-manifest.4c489a1ec49b496530d50078be3e4777.js", "/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.1"});
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
