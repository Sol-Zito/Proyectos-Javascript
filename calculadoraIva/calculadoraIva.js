document.getElementById('btn-submit').addEventListener('click', calculadoraIva);
document.getElementById('form').addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        calculadoraIva();
    }
});


function calculadoraIva() {
    let suma;
    let form = document.forms['calculoForm'];
    let montoIngresado = parseInt(form['montoIngresado'].value);
    let montoIVAIngresado = form['montoIVAIngresado'].value;

    console.log('monto', montoIngresado, montoIVAIngresado);

    if (!montoIVAIngresado) {
        suma = montoIngresado + (montoIngresado * 21 / 100);
    } else {
        suma = montoIngresado + (montoIngresado * parseInt(montoIVAIngresado) / 100)
    }

    console.log('suma', suma)

    document.getElementById('montoTotal').innerText = `El monto total es $${suma}`;

};