// //example
// let myFunc= (number)=>{
//   console.log(number);
//   print(number+1);
// }


// print(0);
// /**
//  *  the function above will go on forever. 
//  * recursion fall or stackOverFlow
//  * overflown my stack
//  * 
//  *  print(0)
//  *    console    0 
//  *  print(1)
//  *  console 1
//  *  print(2)
//  * console 2 
//  * print (3)
//  * console 3 
//  * print (4)
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */
// let myFunc= (number)=>{
//   console.log('before',number);
//   print(number+1);
//   console.log('after',number); // this will never be called 

// }

// // what we can do is add an if statement 
// let myFunc= (number)=>{
//   if(number ==5){
//     return;
//   }
//   console.log('before',number);
//   print(number+1);
//   console.log('after',number); // this will never be called 

// }
// // this will print befores of all the numbers till 5 and then walk backwards nd print all the 
// // 'after' consoles (5),(4)



// new example 
// f(1)=1
// f(2)=f(1)*2+3
// f(3)=13
// f(4)=29


// ...
// f(324)=f(323)*2+3
// f(325)=f(324)*2+3
// f(326)=f(325)*2+3
/**
 * 
 * 
 * you start with 0 
 * to get the next number, you double the previous it and add 3:
 * 
 * 1
 * 5
 * 13
 * 29
 * this rule is 'f'
 * 
 */

let eff = (pos)=>{
  if(pos==1){
    return 1;
  }
   return eff(pos-1)*2+3
}

console.log(eff(11))

// could have done thiswith for loop


// you have to figure out how to stop it to call it itself

//traversing a tree: good for recursion


// your chances of getting cancer
  // if 1 of your parents have cancer: 25%
  // otherwise, its their chances of getting cancer multiplied together then doubled
  // if my parents dnt have cancer, then it will go up the family tree and look for their chances 




// why we use recursion over for loop
// looks simpler on editer and maps directly to the rules you are given