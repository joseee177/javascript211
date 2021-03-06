'use strict'

let friends = ['John','Jenny','Jack','Jill'];
// example of foreach
friends.forEach((element,index)=>{
  console.log(element,index);
});


// foreach takes in a function
/** THIS IS US DEFINING WHAT WE WANT DONE ON AN ELEMENT 
 * this function prints to the console whateber is passed to it
 * @param {*} element 
 */
let print = (element,index)=>{
  console.log(element,'is in the position ',index);
};

// this is how i would print every element myself
// for(let i =0;i<friends.length;i++){
//   console.log(friends[i]);
// }

//any function you pass in to the foreach must meet certain requirements
  // 1. the first input to the function passed in is the element of the array
  // 2. the 2nd input to the function passed in is the index of array
  // 3. the third input to the function passed in is the array itself



// instead of writing out a function, we made a variable (print) to hold
// everything the foreach needs 
friends.forEach(print); 
// these are the same. top with variable, bottom without 
// friends.forEach((element,index)=>{
//   console.log(element,'is in the position ',index);
// });

//////////////////////////////////////////////////

let students =['mike','matt','mary','marge'];

// print: Hi x, thanks for being in my class

// defining the function
let printHi = (student)=>{
  console.log(`hi ${student}, thank you for being in my class`);
};


// students.forEach((student)=>{
//   console.log(`hi ${student}, thank you for being in my class`);
// });

// passing the function in the foreach
students.forEach(printHi)

// when you pass a function to another function/method, the 
  // function being passed in is generally called a 'callback'

///////////////////////////////////////////////

// examples down below 

//////////////////////////////////////////////


let numbers = [4,2,6,1,5,6,7,9,2,6];

/**
 * 
 * 1. use the foreach function to print every number
 * 2. change the foreach function to only print the odd numbers 
 * 
 */


 // this prints every number in numbers
numbers.forEach((num)=>{
  console.log(num);
});

// this is printing ebery odd number in numbers 
numbers.forEach((element)=>{
  if(element%2===1){
    console.log(element)
  }
});

// foreach is used to perform 'instructions' on every element of the array

/**
 * 
 * 
 * FILTER FILTER FILTER FILTER FILTER 
 * 
 * 
 */
// filter is used to filter 'IN' elements from the array

let friendss = ['john','mark','betty','marge','james','mary','adam','bob'];

/**
 * write a function that takes in a string,
 * and returns true if the first letter is n 'M',
 * and returns false if 'M' is not the first letter 
 */

let startwithM =(word)=>{
  if(word[0]=='m'){
    return true;
  }else{
    return false;
  }
};

let newFriends=friendss.filter(startwithM);
console.log(newFriends);

let jFriends = friendss.filter((word)=>{
  if(word[0]== 'j'){
    return true;
  }else{
    return false;
  }
})
console.log(jFriends);

//////////////////////////////////////////////

// practice with objects 

/////////////////////////////////////////////

