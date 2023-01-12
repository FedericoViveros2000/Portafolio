// Todo Asignando un nombre a la cache y cacheando los archivos estaticos mas importantes del proyecto.

const cacheName = "v1_portfolio_jose_viveros";
const urlsToCache = [
    './',
    './css/normalize.css',
    './css/styles.css',
    './img/Icons/icons-32x32.png',
    './img/Icons/icons-64x64.png',
    './img/Icons/icons-96x96.png',
    './img/Icons/icons-128x128.png',
    './img/Icons/icons-192x192.png',
    './img/Icons/icons-256x256.png',
    './img/Icons/icons-384x384.png',
    './img/Icons/icons-512x512.png',
    './img/api_rest_javascript.png',
    './img/avanzado.png',
    './img/axios.svg',
    './img/bootstrap.png',
    './img/bootstrap.svg',
    './img/bx-chevron-left.svg',
    './img/bx-chevron-right.svg',
    './img/bx-mail-send.svg',
    './img/bx-phone-call.svg',
    './img/bxl-css3.svg',
    './img/bxl-html5.svg',
    './img/bxl-javascript.svg',
    './img/bxl-linkedin.svg',
    './img/bxl-microsoft.svg',
    './img/bxl-vuejs.svg',
    './img/bxl-whatsapp.svg',
    './img/bxs-moon.svg',
    './img/bxs-sun.svg',
    './img/country_app_dark.png',
    './img/country_app.png',
    './img/css-3.svg',
    './img/Curriculum_Jose_Viveros.pdf',
    './img/espana.png',
    './img/estados-unidos.png',
    './img/foto_carnet.jpg',
    './img/html-5.svg',
    './img/imagen.svg',
    './img/informatica.jpg',
    './img/ingles_tecnico.png',
    './img/instagram.jpeg',
    './img/instagram_dark.jpeg',
    './img/javascript.svg',
    './img/message.svg',
    './img/sass.svg',
    './img/sitio_2.png',
    './img/git_course.png',
    './img/tailwindcss-icon.svg',
    './img/vue_course.jpg',
    './img/vitejs.svg',
    './img/vue.svg',
    './img/vuex.png',
    './img/work1.jpg',
    './img/work2.jpg'
]

//TODO Instalando los recursos para obtener la PWA con el SW.
self.addEventListener('install', (e) => {
  try {
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      return await cache.addAll(urlsToCache);
    })());
  } catch (error) {
    console.warn(`Ha ocurrido un error al intentar instalar el SW ${error}`);
  }
  });

  //Todo Metodo para recuperar los recursos guardados en la instalacion del SW.
  const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
  }
  
  const cacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork;
  };
  
  self.addEventListener('fetch', (event) => {
    try {
      event.respondWith(cacheFirst(event.request));
    } catch (error) {
      console.log(`Error al hacer el fetch ${error}`);
    }
  });

//Todo Cacheando los recursos si es que existe alguna modificacion.
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