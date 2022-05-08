/* Validando que el navegador mediante el cual estamos accediendo sea compatible con los Service Workers para la PWA */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js')
    .then(reg => console.log(`Registro de SW exitoso ${reg}`))
    .catch(err => console.warn(`Error al tratar de registrar el SW: ${err}`))
}
document.addEventListener('DOMContentLoaded', e => {

    const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {

        document.body.classList.toggle('dark');

        btnSwitch.classList.toggle('active');
        /* 
            TODO Para que el modo nocturno quede guardado (no se borre al actualizar el sitio, LOCALSTORAGE)
        */

        /* 
            !Guardando el modo nocturno en LOCALSTORAGE
        */

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }

    });


    /* 
        TODO Para mostrar los elementos con el scroll
    */

    let animado = document.querySelectorAll(".animado");

    let animacionDerecha = document.querySelectorAll(".animado--derecha");

    let animacionArriba = document.querySelectorAll(".animado--arriba");

    let animacionAbajo = document.querySelectorAll(".animado--abajo");

    let animacionIzquierda = document.querySelectorAll(".animado--izquierda");


    let animacionNormal = document.querySelectorAll(".animado--normal");

    let animacionNormal2 = document.querySelectorAll(".animado--normal2");

    /* Funcion para mostrar el scroll */

    function mostrarScroll() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animado.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animado[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 500 < scrollTop) {

                animado[i].style.opacity = 1;

                animado[i].classList.add('mostrar--izquierda');

            }

        }

    }


    function mostrarScrollDerecha() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionDerecha.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionDerecha[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 500 < scrollTop) {

                animacionDerecha[i].style.opacity = 1;

                animacionDerecha[i].classList.add('mostrar--derecha');

            }

        }

    }

    function mostrarScrollIzquierda() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionIzquierda.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionIzquierda[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 700 < scrollTop) {

                animacionIzquierda[i].style.opacity = 1;

                animacionIzquierda[i].classList.add('mostrar--izquierda');

            }

        }

    }

    function mostrarScrollArriba() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionArriba.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionArriba[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 500 < scrollTop) {

                animacionArriba[i].style.opacity = 1;

                animacionArriba[i].classList.add('mostrar--arriba');

            }

        }

    }

    function mostrarScrollAbajo() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionAbajo.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionAbajo[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 800 < scrollTop) {

                animacionAbajo[i].style.opacity = 1;

                animacionAbajo[i].classList.add('mostrar--abajo');

            }

        }

    }

    function mostrarScrollNormal() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionNormal.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionNormal[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 800 < scrollTop) {

                animacionNormal[i].style.opacity = 1;


            }

        }

    }

    function mostrarScrollNormal2() {

        /* Para detectar el Scroll hacia abajo */

        let scrollTop = document.documentElement.scrollTop;

        /* Para contar cuantos elementos hay */
        for (let i = 0; i < animacionNormal2.length; i++) {

            /* Para detectar la altura del elemento */

            let alturaAnimado = animacionNormal2[i].offsetTop;

            /* Aqui se define cuando se van a mostrar los elementos */
            if (alturaAnimado - 800 < scrollTop) {

                animacionNormal2[i].style.opacity = 1;
                animacionNormal2[i].classList.add('mostrar--normal2');

            }

        }

    }

    window.addEventListener('scroll', mostrarScroll);


    window.addEventListener('scroll', mostrarScrollDerecha);


    window.addEventListener('scroll', mostrarScrollArriba);


    window.addEventListener('scroll', mostrarScrollAbajo);


    window.addEventListener('scroll', mostrarScrollIzquierda);


    window.addEventListener('scroll', mostrarScrollNormal);


    window.addEventListener('scroll', mostrarScrollNormal2);

    /* 
    
    TODO Para el slider de certificaciones
    
    */

    const $slider = document.getElementById('slider');

    let $sliderSection = document.querySelectorAll('.slider__certificaciones--section');

    let $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

    const $btnLeft = document.getElementById('btn--left');

    const $btnRight = document.getElementById('btn--right')

    $slider.insertAdjacentElement('afterbegin', $sliderSectionLast);

    function Next() {

        let $sliderSectionFirst = document.querySelectorAll('.slider__certificaciones--section')[0];

        $slider.style.marginLeft = '-200%';
        $slider.style.transition = 'all .7s linear';

        setTimeout(function () {

            $slider.style.transition = 'none';

            $slider.insertAdjacentElement('beforeend', $sliderSectionFirst);

            $slider.style.marginLeft = '-100%';

        }, 700);


    }


    function Prev() {

        let $sliderSection = document.querySelectorAll('.slider__certificaciones--section');

        let $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

        $slider.style.marginLeft = '0';
        $slider.style.transition = 'all .7s linear';

        setTimeout(function () {

            $slider.style.transition = 'none';

            $slider.insertAdjacentElement('afterbegin', $sliderSectionLast);

            $slider.style.marginLeft = '-100%';

        }, 700);


    }


    let automatico = setInterval(() => {

        Next();

    }, 5000);

    $btnRight.addEventListener('click', () => {

        if ($btnRight) {

            clearInterval(automatico);

            Next();

        }

    })

    $btnLeft.onclick = function () {

        if ($btnLeft) {

            clearInterval(automatico);

            Prev();

        }


    }

    /* Para traducir mi sito web */

    const $btnEnglish = document.querySelector('.en');
    const $lang = document.querySelector('.selected-lang');
    const $langMenu = document.querySelector('.lang-menu');
    const title = document.querySelector('.hero__title');
    const $content = document.querySelector('.hero__copy');
    const $acerca = document.querySelector('.instructor__paragraph');
    const $contactos = document.querySelector('.hero__cta');
    const $cta = document.querySelectorAll('.cta');
    const $ctaDownload = document.querySelector('.cta.cta__download');
    const $develop = document.querySelectorAll('.site__develop');
    const $instructor = document.querySelector('.instructor__tag');
    const $about = document.querySelector('.about__paragraph');
    const $hardSkills = document.querySelector('#tecnicas');

    const $copy = document.querySelector('.card__copy');
    const $virtudes = document.getElementById('virtudes');
    const $pasatiempos = document.getElementById('pasatiempo');
    const $certificados = document.getElementById('certificados');
    const $proyectos = document.getElementById('proyectos');
    const $principal = document.getElementById('principal1');
    const $pasatiempos2 = document.getElementById('pasatiempos2');
    const $html = document.getElementById('html');
    const $soy = document.getElementById('quien');
    const $ver = document.querySelectorAll('.container__proyects--btn');
    const $css = document.getElementById('css');
    const $office = document.getElementById('office');
    const $javascript = document.getElementById('javascript');
    const $contact = document.getElementById('contact');
    const $footerCopy = document.querySelector('.footer__copy');
    const $footer = document.querySelector('.footer__copyright');
    const $vuejs = document.getElementById('vuejs');

    const english = {

        $presentacion: 'Good morning 👋. I am José Viveros, and here you can see some of my skills and abilities as a Junior Developer.',

        $cargo: 'Web Developer Junior',


        $downloadCV: 'Download CV',

        $objetivo: 'My main objective today is to apply my theoretical and practical knowledge learned during my academic training, in order to benefit the organization and at the same time develop myself personally and professionally.',

        $descripcion: 'I am an 19 year old young man, passionate about everything that has to do with technology, more specifically with programming, I am currently studying Computer Engineering and apart from that I am training in a self-taught way since I consider that the only way To advance in this life is to learn new things day after day.',


        $contactar: 'Contact',

        $selected: 'Spanish',

        $ingle: 'English',

        $habilidades: 'Technical skills',

        $copy: 'These are my most important technical skills:',

        $virtues: 'Among my main virtues, I consider my positivism towards life and my desire to learn more day by day, since I am sure that the only way to excel in this life it is learning new things.',

        $hobbies: 'My main hobby is programming, and developing new projects in this area, since I consider that they enrich me as a person and at the same time bring me new knowledge.',

        $certificates: 'Certificates',

        $Iam: 'Who I am',

        $main: 'What are my main virtues?',

        $hobbies2: 'What are my main hobbies?',

        $html: 'I have knowledge of layout with the main layout language of the web.',

        $css: 'I have knowledge of flexbox and grid systems, as well as animations with this language.',

        $vuejs: 'I have knowledge of the Vue js progressive framework, both the Composition API and the Options API, and I also have knowledge about global state management with VUEX.',

        $office: 'I have knowledge of the office suite, more specifically of the Power Point, Word and Excel tools.',

        $javascript: 'I have knowledge in this main programming language and web development',

        $see: 'See more',

        $site:'This site was developed with:',

        $titleContact: 'Do you want to contact me?',

        $proyects:'Proyects',

        $intered: 'If you are interested in my work, do not hesitate to contact me at:',

        $footer: 'Website created by © JosFe:',

        /* Objeto para traducir al espanol */

        espanol: {

            $presentacion: 'Buenos días 👋. Soy José Viveros, y aquí podrá observar algunas de mis habilidades y aptitudes como Desarrollador Junior.',

            $cargo: 'Desarrollador Web Junior',

            $contactar: 'Contactar',

            $objetivo: 'Mi principal objetivo actualmente, es el de aplicar mis conocimientos tanto teóricos y prácticos aprendidos durante mi formación académi con el fin de beneficiar a la organización y a la vez desarrollarme de forma personal y profesional.',

            $descripcion: 'Soy un joven de 19 años, apasionado por todo lo que tenga que ver con la tecnología, más especificamente con la programación, actualme curso la carrera de Ingenieria en Informática y aparte de eso me estoy formando de manera autodidacta ya que considero que la única manera de avanzar en esta vida es aprendiendo dia tras dia nue cosas.',

            $downloadCV: 'Descargar CV',

            $selected: 'Spanish',

            $quienSoy :'Quién soy?',

            $espanol: 'Español',

            $ingles: 'Inglés',

            $habilidades: 'Habilidades Técnicas',

            $copy: 'Estas son mis habiidades técnicas más importantes: ',

            $virtues: 'Entre mis principales virtudes, considero mi positivismo ante la vida y mis  ganas de aprender más día a día, ya que estoy seguro que la unica manera de sobresalir en esta vida es aprendiendo nuevas cosas.',

            $hobbies: 'Mi pasatiempo principal es el de programar, y desarrollar nuevos proyectos en dicho ámbito, ya que considero que me enriquezen como persona y a la vez me aportan nuevos conocimientos.',

            $certificates: 'Certificados',

            $ver :'Ver mas',

            $main: '¿Cuáles son mis principales virtudes?',

            $hobbies2: '¿Cuáles son mis principales pasatiempos?',

            $proyectosTra: 'Proyectos',

            $html: 'Poseo conocimientos de maquetación con el principal lenguaje de maquetación de la web.',
            $vuejs: 'Poseo conocimientos del framework progresivo Vue js, las API`s tanto de composición (Composition API) y la de Opciones (Options API), y ademas poseo conocimientos acerca del manejo global del estado con VUEX.',

            $sitio:'Este sitio fue desarrollado con: ',

            $css: 'Poseo conocimientos de los sistemas de flexbox y grid, además de animaciones con este lenguaje.',

            $office: 'Tengo conocimetos de la suite de office, más específicamente de las herramientas de Power Point, Word y Excel.',

            $javascript: 'Poseo conocimientos en este principal lenguaje de programación y desarrollo web.',

            $titleContact: '¿Quieres contactarme?',

            $intered: 'Si estas interesado en mi trabajo no dudes en contactarme en:',

            $footer: 'Sitio Web creado por &copy JosFe:',

        }


    }




    const ver = document.getElementById('lang');
    


    $btnEnglish.addEventListener('click', e => {

        if ($langMenu.classList.contains('active') == false) {

            ver.setAttribute('lang', 'en');

/*             console.log(ver.getAttribute('lang'));
 */
            $langMenu.classList.add('active');


            traducirInglesFunc();

        } else {

            ver.setAttribute('lang', 'es');

/*             console.log($langMenu);
 */
/*             console.log(ver.getAttribute('lang'));
 */
            $langMenu.classList.remove('active');


            traducirInglesFunc();
        }

    })




    /* Funcion para traducir los idiomas */

    function traducirInglesFunc() {

        if (ver.getAttribute('lang') === 'en') {

            $content.textContent = english.$presentacion;
            $acerca.textContent = english.$objetivo;
            $instructor.textContent = english.$cargo;
            $about.textContent = english.$descripcion;
            $contactos.textContent = english.$contactar;

            $cta.forEach(ct => {

                ct.textContent = english.$contactar;

            });

            $ver.forEach(mas =>{
                mas.textContent = english.$see;
            })

            $develop.forEach(develop =>{
                develop.textContent = english.$site;
            })

            $btnEnglish.textContent = english.$selected;
            $lang.textContent = english.$ingle;
            $hardSkills.textContent = english.$habilidades;
            $copy.textContent = english.$copy;
            $ctaDownload.textContent = english.$downloadCV;
            $virtudes.textContent = english.$virtues;
            $soy.textContent = english.$Iam;
            $pasatiempos.textContent = english.$hobbies;
            $certificados.textContent = english.$certificates;
            $principal.textContent = english.$main;
            $pasatiempos2.textContent = english.$hobbies2;
            $html.textContent = english.$html;
            $vuejs.textContent = english.$vuejs;
            $css.textContent = english.$css;
            $proyectos.textContent = english.$proyects;
            $javascript.textContent = english.$javascript;
            $office.textContent = english.$office;
            $footer.textContent = english.$footer;
            $contact.textContent = english.$titleContact;
            $footerCopy.textContent = english.$intered;

        } else if (ver.getAttribute('lang') === 'es') {


            $content.textContent = english.espanol.$presentacion;
            $acerca.textContent = english.espanol.$descripcion;
            $contactos.textContent = english.espanol.$contactar;
            $about.textContent = english.espanol.$descripcion;
            $lang.classList.remove('active');
            $vuejs.textContent = english.espanol.$vuejs;
            $lang.textContent = english.espanol.$espanol;
            $btnEnglish.textContent = english.espanol.$ingles;
            $copy.textContent = english.espanol.$copy;
            $proyectos.textContent = english.espanol.$proyectosTra;
            

            $cta.forEach(ct => {

                ct.textContent = english.espanol.$contactar;

            });

            $ver.forEach(mas =>{
                mas.textContent = english.espanol.$ver;
            })

            $develop.forEach(develop =>{
                develop.textContent = english.espanol.$sitio;
            })

            $ctaDownload.textContent = english.espanol.$downloadCV;

            $hardSkills.textContent = english.espanol.$habilidades;

            $virtudes.textContent = english.espanol.$virtues;
            $pasatiempos.textContent = english.espanol.$hobbies;
            $certificados.textContent = english.espanol.$certificates;
            $principal.textContent = english.espanol.$main;
            $pasatiempos2.textContent = english.espanol.$hobbies2;
            $html.textContent = english.espanol.$html;
            $css.textContent = english.espanol.$css;
            $javascript.textContent = english.espanol.$javascript;
            $soy.textContent = english.espanol.$quienSoy;
            $office.textContent = english.espanol.$office;
            $footer.textContent = english.espanol.$footer;
            $contact.textContent = english.espanol.$titleContact;
            $footerCopy.textContent = english.espanol.$intered;


        }

    }


})
