let campoInput = document.getElementsByClassName('guessField')[0];
let campoResultado = document.getElementsByClassName('lastResult')[0];
let campoListaNro = document.getElementsByClassName('guesses')[0];
let campoPista = document.getElementsByClassName("lowOrHi")[0];
let campoError = document.getElementsByClassName('error')[0];

let nroRandom = Math.round(Math.random() * 100);
let contador = 0;

function reset() {
  alert('Juego terminado!');
  window.location.reload();
}

function resultado(mensaje, color) {
  campoResultado.innerHTML = mensaje;
  campoResultado.style.backgroundColor = color;
}

function checkGuess() {
  if (!isNaN(parseInt(campoInput.value))) {
    campoError.innerHTML = '';
    contador++;
    let nroSeleccionado = parseInt(campoInput.value);
    if (contador > 1) {
      campoListaNro.innerHTML += ' - ';
    } else if (contador == 1) {
      campoListaNro.innerHTML = "Los intentos fueron: ";
    }
    campoListaNro.innerHTML += `${nroSeleccionado}`;
    if (nroSeleccionado === nroRandom) {
      resultado("Correcto!", "green");
    } else {
      resultado("Error!", "red");
    };
    if (nroSeleccionado > nroRandom) {
      campoPista.innerHTML = "El numero es menor!"
    } else if (nroSeleccionado < nroRandom) {
      campoPista.innerHTML = "El numero es mayor! ";
    };

    if (contador == 10) {
      reset();
    };

    campoInput.value = '';
  } else {
    campoError.innerHTML = 'POR FAVOR INGRESE SOLO NUMEROS!!!';
    }
}