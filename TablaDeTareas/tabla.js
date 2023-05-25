let nuevaTareaTitulo = document.getElementById("titulo").value;
console.log("nuevaTareaTitulo", nuevaTareaTitulo);

let nuevaTareaDesc = document.getElementById("description").value;
console.log("nuevaTareaDesc", nuevaTareaDesc);

let divLista = document.getElementById("tareas");
console.log("divLista", divLista);

let divhijo = document.createElement('p');

function agregar() {   
    divhijo.appendChild(nuevaTareaTitulo);
    divhijo.appendChild(nuevaTareaDesc)
    divLista.appendChild(divhijo);
}