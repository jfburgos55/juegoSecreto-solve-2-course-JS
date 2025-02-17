// Version: 1.0.0
// Last update: 17 Feb 2025 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Funcion para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para verificar el intento del usuario
function verificarIntento() {
    //alert("Clic en el boton intentar");
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    /*console.log("Numero secreto: " + numeroSecreto);
    console.log("Numero usuario: " + numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);*/
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto 
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "Numero secreto es menor");
        } else {
            asignarTextoElemento("p", "Numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }
    return;
}

//Funcion para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = '';
}

//Funcion para generar un numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log("Numero generado: " + numeroGenerado);
    console.log("Lista de numeros sorteados: " + listaNumerosSorteados);

    // si la lista de numeros sorteados es igual al numero maximo, no hay mas numeros disponibles
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'No hay mas numeros disponibles');
    } else {
        // si el numero generado esta incluido en la lista, hacemos una operacion, sino hacemos otra. Usamos recursividad generarNumeroSecreto()
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

//Funcion para asignar condiciones iniciales
function condicionesIniciales() {
    asignarTextoElemento("h1", '¡Juego del numero secreto ACT!');
    asignarTextoElemento("p", `¡Indica un numero del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Funcion para reiniciar el juego
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');
}

//Llamamos a la funcion condicionesIniciales
condicionesIniciales();