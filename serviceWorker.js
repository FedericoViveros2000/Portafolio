// Todo Asignando un nombre a la cache y cacheando los archivos estaticos mas importantes del proyecto.

const cacheName = "v1_portfolio_jose_viveros";
const urlsToCache = [
    './',
    'https://kit.fontawesome.com/552b72054f.js',
    './css/normalize.css',
    './css/styles.css',
    './img/imagen.svg',
    './img/avanzado.png',
    './img/axios.svg',
    './img/bootstrap.PNG',
    './img/bx-chevron-left.svg',
    './img/bx-chevron-right.svg',
    './img/bx-mail-send.svg',
    './img/bx-phone-call.svg',
    './img/bxl-css3.svg',
    './img/bxl-html5.svg',
    './img/bxl-javascript.svg',
    './img/bxl-linkedin.svg',
    './img/bxl-vuejs.svg',
    './img/bxl-whatsapp.svg',
    './img/bxs-moon.svg',
    './img/bxs-sun.svg',
    './img/country_app.JPG',
    './img/css-3.svg',
    './img/Curriculum_Jose_Viveros.pdf',
    './img/espana.png',
    './img/estados-unidos.png',
    './img/foto_carnet.jpg',
    './img/html-5.svg',
    './img/informatica.jpg',
    './img/ingles_tecnico.PNG',
    './img/javascript.svg',
    './img/message.svg',
    './img/sass.svg',
    './img/sitio_1.PNG',
    './img/sitio_2.PNG',
    './img/Vue js.JPG',
    './img/vue_course.JPG',
    './img/vue.svg',
    './img/work1.jpg',
    './img/work2.jpg',
    './img/Icons/icons-512x512.png',
    './img/Icons/icons-384x384.png',
    './img/Icons/icons-256x256.png',
    './img/Icons/icons-192x192.png',
    './img/Icons/icons-128x128.png',
    './img/Icons/icons-96x96.png',
    './img/Icons/icons-64x64.png',
    './img/Icons/icons-32x32.png'
]

self.addEventListener('install', (e) => {
  try {
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(urlsToCache);
    })());
  } catch (error) {
    console.warn(`Ha ocurrido un error al intentar instalar el SW ${error}`);
  }
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