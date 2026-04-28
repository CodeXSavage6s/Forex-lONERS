console.log("best ")
self.addEventListener('install', (event) => {
  event.waitUntil(
   (async () => {
    try {
    const cache = await caches.open('test-pwa')
    await cache.addAll([
     '/',
     '/index.html',
     '/src/style.css',
     '/src/script.js',
     '/font',
     '/Media'
    ])
    self.skipWaiting()
    console.log('Cached Successful', cache)
    } catch (err) {
     console.error('Error msg', err)
    }
   })()
  )
})

self.addEventListener('activate', (event) => {
 console.log("testing activate")
})


self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const response = await caches.match(event.request);
      return response || fetch(event.request);
    })()
  );
});
