"use strict";

const btnElement = document.querySelector('.js-button');
const inputElement = document.querySelector('.js-input');
const cluesElement = document.querySelector('.js-clues');
const attemptsElement = document.querySelector(".js-attempts");
const formElement = document.querySelector('.js-form');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log("Mi número aleatorio es " + random);

function handleForm(ev) {
    ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);


function paragraphClue(clue) {
    cluesElement.innerHTML = clue;
}

function updateClick() {
    let inputValue = parseInt(inputElement.value);

    if (inputValue < 1 || inputValue > 100) {
        paragraphClue("El número deber ser entre el 1 y 100, vuelve a intentar");
    } else if (inputValue === random) {
        paragraphClue("¡Has ganado campeona!");
        btnElement.classList.toggle('hidden');
    } else if (inputValue > random) {
        paragraphClue("Pista : Demasiado alto... prueba otra vez!");
    } else {
        paragraphClue("Pista: Demasiado bajo...prueba con otro número!");
    }
}

let counter = 0;
function updateAttempts() {
    if (paragraphClue === "¡Has ganado campeona!") {
        counter += 0;
        attemptsElement.innerHTML = 'Numero de intentos:' + counter;
    } else {
        counter += 1;
        attemptsElement.innerHTML = 'Numero de intentos:' + counter;
    }
}

function handleButton() {
    updateAttempts();
    updateClick();
};

//Listener para el botón
btnElement.addEventListener("click", handleButton);
