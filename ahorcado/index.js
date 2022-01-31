const elementoIntentos = document.querySelector('.intentos');
let totalIntentosFallidos = 0;
let fraseOriginalElementoIntentos = elementoIntentos.innerHTML
let arrayPalabra = [];

let divHidden = document.getElementById('hidden');

let arrDeBotonesLetras = document.querySelectorAll('.keys');

let cabeza = document.getElementsByClassName('cabeza')
let dorso = document.getElementsByClassName('dorso')
let brazoI = document.getElementsByClassName('brazoI')
let brazoD = document.getElementsByClassName('brazoD')
let piernaI = document.getElementsByClassName('piernaI')
let piernaD = document.getElementsByClassName("piernaD")

function juegoNuevo() {
    reiniciarValores();
    manejarEventosBotonesConLetras();
    obternePalabraSecreta();
}

function obternePalabraSecreta() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://random-word-api.herokuapp.com/word?number=1');
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {        
            let palabraSecreta = JSON.parse(xhttp.response)[0];
            mostrarLetras(palabraSecreta);
        }
    }
    xhttp.send();
}

function manejarEventosBotonesConLetras() {
    arrDeBotonesLetras.forEach((elemento) => {
        elemento.removeAttribute('disabled')
        elemento.onclick = () => {
            validacion(elemento.innerText);        
            elementoIntentos.innerHTML += ` ${elemento.innerText} - `
            elemento.setAttribute('disabled', 'true');
        }
    });
}

function reiniciarValores() {
    const btnLlamapi = document.querySelector('#llamapi');
    btnLlamapi.innerText = 'Nueva Palabra';
    elementoIntentos.innerText = fraseOriginalElementoIntentos;
    divHidden.innerHTML = '';
    totalIntentosFallidos = 0;
}

function mostrarLetras(palabra) {
    arrayPalabra = Array.from(palabra.toUpperCase());
    for (let i = 0 ; i < arrayPalabra.length ; i++){
        divHidden.innerHTML += `<span id="${i}">_</span>`
    }
    console.log('arr', arrayPalabra);
}

function validacion(letraClickeada) {
    console.log('letra recibida', letraClickeada);
    let arrayDeIndices = [];
    arrayPalabra.find((letraDeArrayPalabra, indiceDeArrayPalabra) => {
        if(letraDeArrayPalabra == letraClickeada) {
            arrayDeIndices.push(indiceDeArrayPalabra);
        } else {
            totalIntentosFallidos++;
        }
    });
    for(let el of arrayDeIndices) {
        let elementoSpan = document.getElementById(el);
        elementoSpan.innerHTML = `<span id="${el}">${arrayPalabra[el]}</span>`
    }
    console.log('arr de indices', arrayDeIndices);
 
}
