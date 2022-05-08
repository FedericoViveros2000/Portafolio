// Todo Asignando un nombre a la cache y cacheando los archivos estaticos mas importantes del proyecto.

const cacheName = "v1_portfolio_jose_viveros";
const urlsToCache = [
    '../',
    'https://kit.fontawesome.com/552b72054f.js',
    '../css/normalize.css',
    '../css/styles.css',
    '../img/imagen.svg',
    '../img/Icons/icons-512x512.png',
    '../img/Icons/icons-384x384.png',
    '../img/Icons/icons-256x256.png',
    '../img/Icons/icons-192x192.png',
    '../img/Icons/icons-128x128.png',
    '../img/Icons/icons-96x96.png',
    '../img/Icons/icons-64x64.png',
    '../img/Icons/icons-32x32.png'
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(urlsToCache);
    })());
  });

self.addEventListener('fetch', (e) => {
    try {
        
        e.respondWith((async () => {
            const response = await caches.match(e.request);
    
            console.log(`Obteniendo los recursos de: ${e.request.url}`);
    
            if (response)  return response;
    
            const reponseTwo = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`Cacheando los nuevos recursos: ${e.request.url}`);
            cache.put(e.request, responseTwo.clone());
            return responseTwo;
        })());
    } catch (error) {
        console.log(`Ha Ocurrido un error al hacer fetch ${error}`);
    }
})


self.addEventListener('activate', (e) => {
    try {
        e.waitUntil(caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
              if (key === cacheName) { return; }
              return caches.delete(key);
            }))
          }));
    } catch (error) {
        console.log(`Ha Ocurrido un error al hacer activate ${error}`);
    }
   
  });