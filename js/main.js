import {
    mostrarScroll,
    mostrarScrollAbajo,
    mostrarScrollArriba,
    mostrarScrollDerecha,
    mostrarScrollIzquierda,
    mostrarScrollNormal,
    mostrarScrollNormal2
} from "./modules/animations.js";

document.addEventListener('DOMContentLoaded', e => {

    const btnSwitch = document.querySelector('#switch');

    //TODO Validando si al cargar el sitio web se ha activado o no previamente el modo oscuro
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
        btnSwitch.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
    }

    const $modalInstallContainer = document.querySelector('.modal__install--container');
    const $btnInstall = document.getElementById('btn-install');
    const $btnOmit = document.getElementById('btn-omit');

    /* Validando que el navegador mediante el cual estamos accediendo sea compatible con los Service Workers para la PWA */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js')
        .then(reg => console.log(`Registro de SW exitoso ${reg}`))
        .catch(err => console.warn(`Error al tratar de registrar el SW: ${err}`))
    }

    let deferredPrompt;

    //Escuchando el evento para saber si la aplicacion esta o no instalada.
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
        $modalInstallContainer.classList.add("show");
        //Para en caso de que el usuario desee instalar la aplicacion
        $btnInstall.addEventListener('click', async () => {
            if (deferredPrompt !== null) {
                deferredPrompt.prompt();
                const {
                    outcome
                } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    deferredPrompt = null;
                    $modalInstallContainer.classList.remove("show")
                }
            }
        });

        //En caso de que el usuario no desee instalar la aplicacion se ocultara el popup
        $btnOmit.addEventListener('click', e => {
            $modalInstallContainer.classList.remove("show")
        })

    })

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


    //TODO Escuchando los eventos del Scroll para ejecutar las animaciones
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
    const $javascript = document.getElementById('javascript');
    const $contact = document.getElementById('contact');
    const $footerCopy = document.querySelector('.footer__copy');
    const $footer = document.querySelector('.footer__copyright');
    const $vuejs = document.getElementById('vuejs');

    //Para instalar la aplicacion

    const $installPWA = document.getElementById('install__dialog');
    const $textInstall = document.getElementById('install-text');
    
    const ver = document.getElementById('lang');


    $btnEnglish.addEventListener('click', e => {

        if ($langMenu.classList.contains('active') == false) {
            ver.setAttribute('lang', 'en');
            $langMenu.classList.add('active');
            traducirInglesFunc();
        } else {
            ver.setAttribute('lang', 'es');
            $langMenu.classList.remove('active');
            traducirInglesFunc();
        }

    })

    /* Funcion para traducir los idiomas */
    function traducirInglesFunc() {

        fetch('./js/modules/lang.json')
            .then(res => res.json())
            .then(res => {
                if (ver.getAttribute('lang') === 'en') {

                    $installPWA.textContent = res.english.installTitle;
                    $textInstall.textContent = res.english.textInstall;
                    $btnInstall.textContent = res.english.btnInstall;
                    $btnOmit.textContent = res.english.omit;
                    $content.textContent = res.english.$presentacion;
                    $acerca.textContent = res.english.$objetivo;
                    $instructor.textContent = res.english.$cargo;
                    $about.textContent = res.english.$descripcion;
                    $contactos.textContent = res.english.$contactar;
                    $cta.forEach(ct => {
                        ct.textContent = res.english.$contactar;
                    });

                    $ver.forEach(mas => {
                        mas.textContent = res.english.$see;
                    })

                    $develop.forEach(develop => {
                        develop.textContent = res.english.$site;
                    })

                    $btnEnglish.textContent = res.english.$selected;
                    $lang.textContent = res.english.$ingle;
                    $hardSkills.textContent = res.english.$habilidades;
                    $copy.textContent = res.english.$copy;
                    $ctaDownload.textContent = res.english.$downloadCV;
                    $virtudes.textContent = res.english.$virtues;
                    $soy.textContent = res.english.$Iam;
                    $pasatiempos.textContent = res.english.$hobbies;
                    $certificados.textContent = res.english.$certificates;
                    $principal.textContent = res.english.$main;
                    $pasatiempos2.textContent = res.english.$hobbies2;
                    $html.textContent = res.english.$html;
                    $vuejs.textContent = res.english.$vuejs;
                    $css.textContent = res.english.$css;
                    $proyectos.textContent = res.english.$proyects;
                    $javascript.textContent = res.english.$javascript;
                    $footer.textContent = res.english.$footer;
                    $contact.textContent = res.english.$titleContact;
                    $footerCopy.textContent = res.english.$intered;

                } else if (ver.getAttribute('lang') === 'es') {

                    $installPWA.textContent = res.espanol.installTitle;
                    $textInstall.textContent = res.espanol.textInstall;
                    $btnInstall.textContent = res.espanol.btnInstall;
                    $btnOmit.textContent = res.espanol.omit;
                    $content.textContent = res.espanol.$presentacion;
                    $acerca.textContent = res.espanol.$descripcion;
                    $contactos.textContent = res.espanol.$contactar;
                    $about.textContent = res.espanol.$descripcion;
                    $lang.classList.remove('active');
                    $vuejs.textContent = res.espanol.$vuejs;
                    $lang.textContent = res.espanol.$espanol;
                    $btnEnglish.textContent = res.espanol.$ingles;
                    $copy.textContent = res.espanol.$copy;
                    $proyectos.textContent = res.espanol.$proyectosTra;

                    $cta.forEach(ct => {
                        ct.textContent = res.espanol.$contactar;
                    });

                    $ver.forEach(mas => {
                        mas.textContent = res.espanol.$ver;
                    })

                    $develop.forEach(develop => {
                        develop.textContent = res.espanol.$sitio;
                    })

                    $ctaDownload.textContent = res.espanol.$downloadCV;
                    $hardSkills.textContent = res.espanol.$habilidades;
                    $virtudes.textContent = res.espanol.$virtues;
                    $pasatiempos.textContent = res.espanol.$hobbies;
                    $certificados.textContent = res.espanol.$certificates;
                    $principal.textContent = res.espanol.$main;
                    $pasatiempos2.textContent = res.espanol.$hobbies2;
                    $html.textContent = res.espanol.$html;
                    $css.textContent = res.espanol.$css;
                    $javascript.textContent = res.espanol.$javascript;
                    $soy.textContent = res.espanol.$quienSoy;
                    $footer.textContent = res.espanol.$footer;
                    $contact.textContent = res.espanol.$titleContact;
                    $footerCopy.textContent = res.espanol.$intered;

                }
            })
            .catch(err => console.log(`Ha ocurrido un error al intentar traducir la pagina ${err} `))
    }


})