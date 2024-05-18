// Service Worker

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('Kadian-cache').then(function (cache) {
            return cache.addAll([
                'index.html',
                'img/logo.svg',
                'img/SurajKadian.png',
                'icons/apple-touch-icon.png',
                'icons/favicon.ico',
                'icons/icon-192-maskable.png',
                'icons/icon-192.png',
                'icons/icon-512-maskable.png',
                'icons/icon-512.png',
                'manifest.json',
                'service-worker.js'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service worker activated');

    const CACHE_PREFIX = 'Kadian-cache-';

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith(CACHE_PREFIX) && cacheName !== currentCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Fetch event', event);
});
