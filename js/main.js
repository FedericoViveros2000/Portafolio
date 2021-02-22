const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',() => {

    document.body.classList.toggle('dark');

    btnSwitch.classList.toggle('active');
    /* 
        TODO Para que el modo nocturno quede guardado (no se borre al actualizar el sitio, LOCALSTORAGE)
    */

    /* 
        !Guardando el modo nocturno en LOCALSTORAGE
    */

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode','false');
    }

});


/* 
    TODO Obtenemos el modo actual en el cual nos encontramos
*/

if(localStorage.getItem('dark-mode')==='true'){

    document.body.classList.add('dark');
    btnSwitch.classList.add('active');


}else{

    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');

}

/* 
    TODO Para mostrar los elementos con el scroll
*/

let animado = document.querySelectorAll(".animado");   

let animacionDerecha = document.querySelectorAll(".animado--derecha");   

let animacionArriba = document.querySelectorAll(".animado--arriba");   

let animacionAbajo = document.querySelectorAll(".animado--abajo"); 

let animacionIzquierda= document.querySelectorAll(".animado--izquierda");  


let animacionNormal= document.querySelectorAll(".animado--normal");   

let animacionNormal2= document.querySelectorAll(".animado--normal2");   

/* Funcion para mostrar el scroll */

function mostrarScroll(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animado.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animado[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 500 < scrollTop){

            animado[i].style.opacity = 1;

            animado[i].classList.add('mostrar--izquierda');

        }
        
    }

}


function mostrarScrollDerecha(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionDerecha.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionDerecha[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 500 < scrollTop){

            animacionDerecha[i].style.opacity = 1;

            animacionDerecha[i].classList.add('mostrar--derecha');

        }
        
    }

}
function mostrarScrollIzquierda(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionIzquierda.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionIzquierda[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 700 < scrollTop){

            animacionIzquierda[i].style.opacity = 1;

            animacionIzquierda[i].classList.add('mostrar--izquierda');

        }
        
    }

}

function mostrarScrollArriba(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionArriba.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionArriba[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 500 < scrollTop){

            animacionArriba[i].style.opacity = 1;

            animacionArriba[i].classList.add('mostrar--arriba');

        }
        
    }

}

function mostrarScrollAbajo(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionAbajo.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionAbajo[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 800 < scrollTop){

            animacionAbajo[i].style.opacity = 1;

            animacionAbajo[i].classList.add('mostrar--abajo');

        }
        
    }

}

function mostrarScrollNormal(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionNormal.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionNormal[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 800 < scrollTop){

            animacionNormal[i].style.opacity = 1;


        }
        
    }

}
function mostrarScrollNormal2(){

    /* Para detectar el Scroll hacia abajo */

    let scrollTop = document.documentElement.scrollTop;

    /* Para contar cuantos elementos hay */
    for (let i = 0; i < animacionNormal2.length; i++) {

        /* Para detectar la altura del elemento */

        let alturaAnimado = animacionNormal2[i].offsetTop;

        /* Aqui se define cuando se van a mostrar los elementos */
        if(alturaAnimado - 800 < scrollTop){

            animacionNormal2[i].style.opacity = 1;
            animacionNormal2[i].classList.add('mostrar--normal2');

        }
        
    }

}

window.addEventListener('scroll',mostrarScroll);


window.addEventListener('scroll',mostrarScrollDerecha);


window.addEventListener('scroll',mostrarScrollArriba);


window.addEventListener('scroll',mostrarScrollAbajo);


window.addEventListener('scroll',mostrarScrollIzquierda);


window.addEventListener('scroll',mostrarScrollNormal);


window.addEventListener('scroll',mostrarScrollNormal2);