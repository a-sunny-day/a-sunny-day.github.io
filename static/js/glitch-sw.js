const cachesName = `pwa-${self.__version__ || 0}`;
console.log("cache name: ", cachesName);
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cachesName)
            .then(function(cache) {
                return cache.addAll([
                    // "index.html",
                    // "index.js",
                ])
            })
    )
});

self.addEventListener('fetch', function(e) {
    // console.log(e.request.url);
    e.respondWith(
        caches.match(e.request)
            .then( function(response) {
                return response || fetch(e.request);
            })
    )
})

console.log("time: 2");
