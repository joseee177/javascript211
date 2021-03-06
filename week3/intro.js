'use strict'

//for loops, dom, and objects 

//***************************************

// a for loop has 3 statements 
  // first one sets a variable beforethe loop starts 
  // 2nd statement for when it should end 
  // 3rd statement increment or decrement
// you can run a for loop on objects/arrays
// for of, for in loops, while loops, do-while, for loops

 
      // YOUSIF EXPLANATION
//1. a statement that is run before the loop starts, this is 
// executed only once
  //2. this should go again? true/false statemnt, if it resolves to true, then execute the iteration 1 more time
      // like blackjack (hit me hit me)
  //3. the code taht should be executed for every iteration
  //4. what to do to prepare for the next iteration


for(1; 2; 4){
  3
};

// print nymbers 1-5
  //1. set a variable to hold 1 
  //2. ask if the variable is less than or equal to 5
  //3. print the variavle
  //4. increment the variavle by 1

  for(let numb =1; numb <=5; numb = numb ++){
    console.log(numb);
  };
/****************************************
 * computer memory: 
 * numb =1
 * numb =2
 * numb =3
 * numb =4
 * numb =5
 * numb =6
 *  *************************************
 * computer console
 *  1
 *  2
 *  3
 *  4
 *  5
 * 
 */

// write a for loop to print all the even numbers between 1-100

for(let i =1; i<=100;i++){
  if(i % 2 == 0){
    console.log(i)
  };
};

// print this pattern 
1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz
 // print fizz if divisable by 3 
 // print buzz if divisable by 5 
 // print fizbuzzz if divisable by 3 & 5

 for(let i =1;i<=45;i++) {
  if(i % 3 == 0 && i % 5 ==0){
    console.log("fizz buzz")
  } 
  else if(i % 5 ==0){
    console.log("buzz")
  } 
  else if(i %3 == 0){
    console.log('fizz')
  } 
  else {
    console.log(i)
  }
}



