
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let objeto = document.querySelector(elemento);
    objeto.innerHTML = texto;
}

function generarNumeroRandom(){
    numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumeros.length == numeroMaximo){
        asignarTexto('p', 'Ya alcanzó la máxima cantidad de números posibles.')
    } else{
        if (listaNumeros.includes(numeroSecreto)){
            return generarNumeroRandom();
        } else{
            listaNumeros.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function verificarNumero(){
    let numeroUsuario = parseInt(document.getElementById('input__secreto').value);
    
    if(numeroSecreto === numeroUsuario){
        asignarTexto('p', `Acertaste el número secreto en ${intentos} ${intentos==1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroUsuario < numeroSecreto){
            asignarTexto('p', 'El número secreto es mayor');
        } else{
            asignarTexto('p', 'El número secreto es menor');
        }
    }
    intentos++;
    borrarContenido();
}

function borrarContenido(){
    document.getElementById('input__secreto').value = '';
}

function condicionesIniciales(){
    asignarTexto('h1', 'Número secreto');
    asignarTexto('p', `Ingrese un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroRandom();
    intentos = 1;
}

function reiniciar(){
    borrarContenido();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
