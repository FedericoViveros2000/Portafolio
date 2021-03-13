
/* Para asignar un nombre y version de cache */

const CACHE_NAME = 'v1_cache_portafolio_Jose_Viveros',

urlsToCache = [

    './',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap',
    '../css/styles.css',
    './main.js'
    

]


/* 
 TODO Durante la fase de instalacion, generalmente se almacena en cache los activos estaticos
*/

self.addEventListener('install',e =>{

    
    e.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(urlsToCache)
            
            .then(()=>self.skipWaiting())
            
            console.log("Install");
        })

        .catch(err => console.log("Fallo registro de cache", err))


    );

})


/* 

    ? Una vez que se instala el Service Worker, se activa y busca los recursos para hacer que funcione sin conexion

*/


self.addEventListener('activate',e =>{


    const cacheWhiteList = [ CACHE_NAME ]

    e.waitUntil(

        caches.keys()

        .then(cachesNames => {

            cachesNames.map(cacheName=>{

                /* Eliminamos lo que ya no se necesita en cacha */

                if(cacheWhiteList.indexOf(cacheName)===-1){

                    return caches.delete(cacheName);

                }

            });

        })

        /* Indica al SW que active el cache actual */

        .then(() => self.clients.claim())

    )

})

/* 

 ! Se encarga de recuperar los recursos del navegador y actualizar el sitio.

*/

self.addEventListener('fetch',e => {

   

    /* Responde ya sea con el objeto en cache o continuar y buscar la url real*/

    e.respondWith(

        /* Busca una coincidencia con el clache  */

        caches.match(e.request)

        .then(res =>{

            if(res){

                /* Recuperando de la cache */

                return res;


            }

            /* Recupera la peticion de la URL */
            
            return fetch(e.request)

        })

    )

})
