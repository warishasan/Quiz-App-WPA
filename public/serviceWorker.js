

const cacheName = 'v1';

/*
const cacheAssets = [
  'serviceRegister.js',

  '/index.html',
  '/static/js/bundle.js',
  '/static/js/1.chunk.js',
  '/static/js/main.chunk.js',
  '/App.js',
  '/',


];
*/



const cacheAssets = [
 './static/css/main.5054d6d7.chunk.css',
 './static/js/2.f6a9a0d2.chunk.js',
 './static/js/main.6eb23ee3.chunk.js',
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






