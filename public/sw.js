console.log('started ServiceWorker');
this.addEventListener('install', event => console.log('installed', event));
this.addEventListener('activate', event => console.log('activated', event));
this.addEventListener('fetch', event => console.log('fetching', event));

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('look-live-v1').then(cache => {
      return cache.addAll([
        './',
        '../styles/style.css',
        '../js/app.js',
        '../images/header-small.jpg',
        '../images/spritesheet.png',
        '../images/logo.png'
      ]);
    })
  );
});

this.addEventListener('fetch', event => event.respondWith(
  caches.match(event.request).then(response => {
    return response || fetch(event.request).then(response => {
      return caches.open('look-live-v1').then(cache => {
        cache.put(event.request, response.clone());
        return response;
      });
    });
  })
});