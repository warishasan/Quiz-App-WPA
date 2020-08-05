

const cacheName = 'v1';

/*
const cacheAssets = [
  'serviceRegister.js',

  '/index.html',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/App.js',
  '/',


];

*/


const cacheAssets = [
 './static/css/main.d67028a7.chunk.css',
 './static/js/2.c37db9c6.chunk.js',
 './static/js/main.6eaf8a1a.chunk.js',
 './index.html',
 '/'

];




// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


this.addEventListener("fetch", (event) => {

  if (!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((resp) => {
  
        if (resp) {
          return resp
        }

        let requestUrl = event.request.clone();
        fetch(requestUrl)
      }
  
      )
  
    )
  

  }
 
})


// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});






