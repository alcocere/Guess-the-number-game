"use strict";

const random = getRandomNumber (100);
const btnElement = document.querySelector('.js-button');
const inputElement = document.querySelector('.js-input');
const cluesElement = document.querySelector('.js-clues');
const attempts = document.querySelector (".js-attempts");


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log("Mi número aleatorio es " + random);

function updateAttempts (){
    acc += 1;
    attempts.innerHTML = `Número de intentos: ${acc}`;
}

function updateClick () {
    let inputValue = parseInt(inputElement.value);

    if (inputValue < 1 || inputValue > 100) {
        cluesElement.innerHTML = "El número deber ser entre el 1 y 100, vuelve a intentar";
    } else if (inputValue === random) {
        cluesElement.innerHTML ="¡Has ganado campeona!";
    } else if (inputValue > random) {
        cluesElement.innerHTML = "Pista : Demasiado alto... prueba otra vez!"
    } else {
        cluesElement.innerHTML = "Pista: Demasiado bajo...prueba con otro número!"
    }
}

//Listener para el botón
btnElement.addEventListener ("click", updateClick);

