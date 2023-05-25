let miInput = document.querySelector('.peticion');
let peticionText = "Pedro por favor responde esta pregunta importante";
let respuesta = '';

miInput.addEventListener('onkeypress', (event) => {


    respuesta += event.key;


    console.log("Se presionó la tecla: " + respuesta);

})

