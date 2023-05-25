const tableroEl = document.getElementsByClassName('tablero')[0];
for (let i = 0; i < 10; i++) {
    const elFila = document.createElement('div');
    elFila.classList.add('fila')
    const iEsPar = i % 2 == 0; 
    for(let j = 0; j < 10; j++){

        const jEsPar = j % 2 == 0;

        const cuadradoEl = document.createElement('button');
        cuadradoEl.classList.add('cuadrado')

        if(iEsPar == jEsPar){
            cuadradoEl.classList.add('black');
        }

        elFila.appendChild(cuadradoEl);
    }
    tableroEl.appendChild(elFila);
}















// const cuadricula = []
// let horizontal = []

// const contenedor = document.getElementsByClassName('tablero')[0];
// const btn = document.getElementsByClassName('crear')[0];

// btn.onclick = () =>{
//     armarCuadricula()
//     meterleColor()
// }

// function armarCuadricula() {
//     for (let i = 0; i < 100; i++) {
//         let nro = 0;

//         horizontal.push(nros)

//         if (horizontal.length == 10) {
//             cuadricula.push(horizontal)
//             horizontal=[];
//         }

//     }

// }

// function meterleColor() {
//     for (let i = 0; i <= cuadricula.length ; i++) {
//         let div = document.createElement('div')
//         div.classList.add('fila')
//         for (let j = 0; j <= cuadricula[i].length; j++) {
//             if(j % 2 == 0 && i % 2 == 0){
//                 let withe = document.createElement('button')
//                 withe.classList.add('withe')
//                 withe.innerText = 'o'
//                 div.appendChild(withe)
//             }else if(j % 2 != 0 && i % 2 == 0) {
//                 let black = document.createElement('button')
//                 black.classList.add('black')
//                 black.innerText = 'x'
//                 div.appendChild(black)
//             }

//             contenedor.appendChild(div)
//         }
//     }
// }

// console.table('horizontal', horizontal)
// console.table('cuadricula', cuadricula)
