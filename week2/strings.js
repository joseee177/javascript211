// strings 
// use double quotes or single quotes 
// put a number as a string 
// methods 
// functions are global and you define them
// .length is a property


let fruit = "apple";
let sentence = "    the brown fox jumped over the lazy dog      ";
let newSentence = sentence.trim();
console.log(newSentence);
let v = fruit.indexOf('p');
console.log(v);

//indexOf returns the index of the desired character/text. returns -1 if the value is not found

let a = 12;
let e = -1;
let i = 3;
let o = 4;
let u = 3;

// write a function that takes in 2 numbers and returns smallest non-negative number
// what should i do if both numbers are negative? just pick one of them

let smallest = (num1,num2)=>{
 if(num1<= 0 && num2<=0){
   return num1
 }else if(num1<0 && num2>0){
   return num2
 }else if(num2<0 && num1>0){
   return num1
 }else if(num1<num2){
   return num1
 }else{
   return num2
 }
}
console.log(smallest(a,e));
console.log(smallest(u,o));

let word = "bobcat";
// using function smallest and indexOf, what is the position of the first vowel
// write a function that will return the position of the first vowel

let word1 = "bobcat";
let word2 = "Meow";
let word3 = "elephant";
let word4 = "Tsksks";

let indexOfVowel = (word)=>{
  let vowelIndex = -1;
  let aIndex = word.indexOf("a");
  let eIndex = word.indexOf('e');
  let iIndex = word.indexOf('i');
  let oIndex = word.indexOf('o');
  let uIndex = word.indexOf('u');

   vowelIndex = smallest(vowelIndex, aIndex);
   vowelIndex = smallest(vowelIndex, eIndex);
   vowelIndex = smallest(vowelIndex, iIndex);
   vowelIndex = smallest(vowelIndex, oIndex);
   vowelIndex = smallest(vowelIndex, uIndex);
  
  return vowelIndex;
}

console.log(indexOfVowel(word1));//1

console.log(indexOfVowel(word2));//1

console.log(indexOfVowel(word3));//0
console.log(indexOfVowel(word4));//-1



//substring practice
let brownWord = "browny";

let part1 = brownWord.substring(0,2)
console.log(part1) // br

let part2 = brownWord.substring(2)
console.log(part2) //owny

// we have a function that can find the position of a vowel
//we have a method that can be used to split the word at a position(index)
// write a function that will take a single word
  // and return the piglatin translation of the word

//RULES: 
  // if word starts with a vowel, add yay to the end
  // example: egg->eggyay, elephant->elephantyay

  // if the word has a vowel, then split the word in to 2 parts at the vowel,
  // then swap the 2 parts, then add -ay to the end 
  // example: fox -> f +ox -> oxf -> oxfay, comb -> c + omb -> ombc -> ombcay
  
  //if the word has no vowel, then add -ay to the end of it
  // example: pftt -> pfttay 


  let firstName = "John";
  let lastName = "McClain";

let newName = lastName + firstName;
