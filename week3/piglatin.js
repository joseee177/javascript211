'use strict'
// just to check console in the DOM
console.log('hey there lil mama lemme whisper in ya ear');


// get the button element from the DOM 
// so when the button is clicked, the function gets called 
let button = document.getElementById('inputButton');
button.addEventListener('click',()=>{
  console.log('button got clicked')

//get the input element from the DOM 
let inputBox = document.getElementById('inputBox');

//read the actual input from the input element
let input = inputBox.value;

//console log the input just to check and debug
console.log(`the user entered: ${input}`);

let pigWord = piglatin(input);

//grab the span that holds the translation from the DOM
let span = document.getElementById('translation');
span.innerText = pigWord;

});

let piglatin = (word)=>{
  
 
  return word + 'ay'
};
