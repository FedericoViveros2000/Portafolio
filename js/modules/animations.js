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

    export function mostrarScroll() {

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

    export function mostrarScrollDerecha() {
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

    export function mostrarScrollIzquierda() {

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

    export function mostrarScrollArriba() {
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

    export function mostrarScrollAbajo() {
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

    export function mostrarScrollNormal() {
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

    export function mostrarScrollNormal2() {
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