self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nilai-siswa-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
