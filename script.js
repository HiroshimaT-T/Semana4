'use strict';
// window.addEventListener('click', () => {
//     alert('Me distes un click ¡Auuu!');
// });
//  window.addEventListener('dblclick', () => {
//    alert('Me distes 2 clicks ¡Auuu!')
// });

// console.log(confirm('Aceptas los caramelos'));
// const saludar = () => {
//     console.log('Hola');
//     window.removeEventListener('click', saludar);
// }
// window.addEventListener('click', saludar);
// window.addEventListener('dblclick', saludar);

// const nombre = prompt('Ingresa tu nombre');
// console.log(nombre);

// const mainTitle = document.querySelector('h1');
// O:
// const mainTitle = document.getElementById('h1');
// console.log (mainTitle);
// mainTitle.innerHTML += 'Daniel';
// O:
// mainTitle.innerHTML = mainTitle.innerHTML + 'caaca';

// const mainTitle = document.getElementById('h1');
// const nombre = prompt('Quieres ser mi poto');
// mainTitle.innerHTML += nombre + 'xd';


const documentReady = () => {
    const saludar = () =>  {
        console.log(caca);
    };
    console.log.setInterval(saludar, 1000)

}
document.addEventListener('DOMContentLoaded', documentReady)