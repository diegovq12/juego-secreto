let rangoMin = 1;
let rangoMax = 10;
let intentos;
let maxIntentos = 3;
let numeroAleatorio;
let listaNumerosGenerados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroDeUsuario;
    if(intentos <= maxIntentos){ 
        numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    }else
    {
        asignarTextoElemento('p',`Perdiste! el numero secreto era ${numeroAleatorio}`);
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    // console.log(`Numero aleatorio ${numeroAleatorio}`);
    // console.log(`numero De Usuario ${numeroDeUsuario}`);

    // console.log(`Es igual? ${numeroAleatorio === numeroDeUsuario}`);
    console.log(numeroAleatorio);
    if (numeroAleatorio === numeroDeUsuario) {
        asignarTextoElemento('p', `Felicidades, has adivinado el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //usuario no acerto
        if (numeroAleatorio < numeroDeUsuario) {
            asignarTextoElemento('p', `El numero es menor te ${((maxIntentos - intentos)=== 1)?'queda': 'quedan'} ${maxIntentos - intentos} ${((maxIntentos - intentos)=== 1)?'intento': 'intentos'}`);
        }
        else {
            asignarTextoElemento('p', `El numero es mayor te ${((maxIntentos - intentos)=== 1)?'queda': 'quedan'} ${maxIntentos - intentos} ${((maxIntentos - intentos)=== 1)?'intento': 'intentos'}`);
        }
        
        intentos++;
        limpiarCaja();
    }
    return;
}

//typeof(variable) para verificar el tipo de dato de la variable
//parseInt(variable) para convertir un string a numero

function generarNumeroAleatorio(min, max) {
    let numeroGenerado = Math.floor(Math.random() * max) + min;
    //Si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    
    //Si ya sorteamos todos los numeros
    if (listaNumerosGenerados.length === max) {
        asignarTextoElemento('p', 'Ya se generaron todos los numeros posibles');
    } else {
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroAleatorio(min, max);
        } else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Adivina el numero secreto!');
    asignarTextoElemento('p', `Ingresa un numero del ${rangoMin} al ${rangoMax} Tienes ${maxIntentos}!`);
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
    intentos = 1;
}
condicionesIniciales();