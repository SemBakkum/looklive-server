console.log('started ServiceWorker');
this.addEventListener('install', event => console.log('installed', event));
this.addEventListener('activate', event => console.log('activated', event));
this.addEventListener('fetch', event => console.log('fetching', event));

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('look-live-v1').then(cache => {
      return cache.addAll([
        '/dist/css/style.css',
        '/js/app.js',
        '/images/header-small.jpg',
        '/images/spritesheet.png',
        '/images/logo.png',
        '/api/feed',
        'https://fonts.googleapis.com/css?family=Raleway:300,400,700' 
        
      ]);
    })
  );
});

this.addEventListener('activate', event => console.log('activated', event));

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
      	return response || fetch(event.request)
      })
  );
});
                      
                      