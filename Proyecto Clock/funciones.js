// funcionalidad del boton 

let btnLight = document.getElementById('light'); 
let btnDark = document.getElementById('dark');

btnLight.disable = false;

function agregarClas() {
  btnDark.classList.toggle('active');
  btnLight.classList.toggle('active');
}

let body = document.getElementsByClassName('body')[0];
let clock = document.getElementsByClassName('clock')[0];
let handSecond = document.getElementsByClassName('handSecond')[0];

function lightMode(){
  body.classList.remove('darkMode');
  clock.classList.remove('darkMode');
  handSecond.classList.remove('darkMode');
  date.classList.remove('darkMode');
  btnDark.removeAttribute('disabled');
  btnLight.setAttribute('disabled', true);
}

function darkMode(){
  body.classList.add('darkMode');
  clock.classList.add('darkMode');
  handSecond.classList.add('darkMode');
  date.classList.add('darkMode');
  btnLight.removeAttribute('disabled');
  btnDark.setAttribute('disabled', true);
}

// Funcionalidad del Reloj

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
let date = document.getElementById('date');

function setClock() {
  const currentDate = new Date();

  // al mes se le agrega un +1 dado que al guardarlo como un array empieza desde 0, 
  //lo que quiere decir que al mes de enero lo devuelve como 0 y a diciembre como 11
  date.innerText = `La fecha de hoy es: ${ currentDate.getUTCDate()} del ${ currentDate.getUTCMonth()+1} del ${currentDate.getUTCFullYear()} `;
  
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
