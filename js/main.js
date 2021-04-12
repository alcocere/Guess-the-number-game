"use strict";

const btnElement = document.querySelector('.js-button');
const inputElement = document.querySelector('.js-input');
const cluesElement = document.querySelector('.js-clues');
const attemptsElement = document.querySelector(".js-attempts");
const formElement = document.querySelector('.js-form');
const resetBtn = document.querySelector(".js-reset");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let random = getRandomNumber(100);
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

    if (inputValue === random) {
        paragraphClue("¡Enhorabuena, has ganado campeona! 🎉'");
        btnElement.classList.toggle("hidden");
    } else if (inputValue > random) {
        paragraphClue("Pista: Demasiado alto...prueba con otro número!");
    } else if (inputValue < random) {
        paragraphClue("Pista: Demasiado bajo...prueba con otro número!");
    } else {
        (inputValue < 1 || inputValue > 100)
        paragraphClue("Pista: Debes introducir un número entre 1 y 100");
    }
}

let counter = 0;
function updateAttempts() {
    if (paragraphClue === "¡Has ganado campeona!") {
        counter += 0;
        attemptsElement.innerHTML = 'Numero de intentos: ' + counter;
    } else {
        counter += 1;
        attemptsElement.innerHTML = 'Numero de intentos: ' + counter;
    }
}

function handleButton() {
    updateAttempts();
    updateClick();
};

function handleReset() {
    random = getRandomNumber(100);
    console.log("Mi número aleatorio es " + random);
    counter = 0;
    inputElement.value = '';
    cluesElement.innerHTML = 'Pista: Escribe un número entre 1 y 100';
    attemptsElement.innerHTML = 'Número de intentos: 0';
    btnElement.classList.remove('hidden');
}

btnElement.addEventListener("click", handleButton);
resetBtn.addEventListener("click", handleReset);
