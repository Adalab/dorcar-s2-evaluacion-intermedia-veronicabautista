'use strict';

// Generar el número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
// Y guardarlo en una variable
var randomNumber = getRandomNumber(100);
var userNumber;
console.log(randomNumber);

// Inicializar a 0 una variable de contador
var counter = 0;
var pageCounter = document.querySelector('.counter');

  
// Crear una función que se ejecute cuando haga click en el botón de prueba
// Esta función tiene que hacer:
  var button = document.querySelector('.button');
  var yourNumber = document.querySelector('.writenumber');
  var result = document.querySelector('.result');
  
  function writeResult(text) {
    result.innerHTML = text;
  }
  
//  1 - incrementar el contador y pintar el contador en mi html
  function play() {
    counter = counter + 1;
      function writeCounter() {
      pageCounter.innerHTML = counter;
    }  
    writeCounter();
//  3 - recoger el valor del campo
    userNumber = parseInt(yourNumber.value);
    console.log('El usuario ha elegido el: ' + userNumber);
  
//  4 - Compararlo con mi número aleatorio
    compare();
  }
  
  function compare() {
    if (randomNumber === userNumber) {
      writeResult('Ganadora');
    } else if (randomNumber > userNumber) {
      writeResult('Te has quedado corta');
    } else {
      writeResult('Te has pasado');
    }
  }

// Asignar un listener al botón de prueba para que ejecute una función al hacer click
 button.addEventListener('click', play);