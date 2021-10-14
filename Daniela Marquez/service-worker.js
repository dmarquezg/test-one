const _cacheName = 'movies-cache';

self.addEventListener('install', (event) => {
    console.log("SW Install");

    const _appShellFiles = [
        '/index.html',
        '/css/style.css',
        '/js/main.js',
        '/js/app.js'
    ];

    const _openCache = async () => {
        const _appShellStorage = await caches.open(_cacheName);
        return _appShellStorage.addAll(_appShellFiles);
    };

    event.waitUntil(_openCache());
});

/*Cache Only
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request))
});*/

//Network Only
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});