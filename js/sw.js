// Todo Asignando un nombre a la cache y cacheando los archivos estaticos mas importantes del proyecto.

const CACHE_NAME = "v1_portfolio_jose_viveros";
urlsToCache = [
    './',
    'https://kit.fontawesome.com/552b72054f.js',
    './css/normalize.css',
    './css/styles.css',
    './img/imagen.svg',
    './img/Icons/icons-512x512.png',
    './img/Icons/icons-384x384.png',
    './img/Icons/icons-256x256.png',
    './img/Icons/icons-192x192.png',
    './img/Icons/icons-128x128.png',
    './img/Icons/icons-96x96.png',
    './img/Icons/icons-64x64.png',
    './img/Icons/icons-32x32.png'
]

//Para instalar la aplicacion y asi cachear los archivos estaticos
self.addEventListener('install', e=> {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=> {
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaitiing())
        })
        .catch(err => console.log(`Fallo al registrar la cache ${err}`))
    )
})

//Una vez que se instale el SW, se activa y busca los recursos (en cache) de la aplicacion para que pueda funcionar sin conexion.

self.addEventListener('activate', e=> {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            cacheNames.map(cacheName => {
                //Eliminamos lo que ya no se necesita en cache.
                if(cacheWhiteList.indexOf(cacheName) === -1){
                    return caches.delete(cacheName);
                }
            })
        })
        //Indica al Service Worker que se actualizo la cache
        .then(() => self.client.clam())
        .catch(err => console.log(`Ocurrio un error al actualizar la cache ${err}`))
    )
})

//Recupera los recursos del navegador una vez que se recupera la conexion (detecta cambios del servidor).

self.addEventListener('fetch', e=> {
//Responde ya sea con el objeto en cache o continua con una busqueda de una url real.
e.responseWith(
    caches.match(e.request)
    .then(res => {
        if (res) {
            //Recuperando del cache
            return res;
        }

        //Recupera la peticion a traves de la url si no existe en Cache
        return fetch(e.request);

    })
)
})