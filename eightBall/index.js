let campoInput = document.getElementById('pregunta');
let eightBall = document.getElementsByClassName('respuesta')[0];
let originP = eightBall.innerHTML;

function comienzoJuego() {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 8);

  if (randomNumber === 0) {
    eightBall.innerHTML = 'It is certain';
  } else if (randomNumber === 1) {
    eightBall.innerHTML = 'It is decidedly so';
  } else if (randomNumber === 2) {
    eightBall.innerHTML = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall.innerHTML = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall.innerHTML = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall.innerHTML = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall.innerHTML = 'Outlook noy so good';
  } else {
    eightBall.innerHTML = 'Signs point to yes';
  };

}

function controlBtn(e) {
  console.log('e', e);
  let boton = document.querySelector('.boton');
  let userQuestion = e.target.value;
  
  if (userQuestion.length === "") {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  };
}



function nuevaPregunta() {
  alert('Realizar nueva pregunta');
  eightBall.innerHTML = originP;
  window.location.reload();
}