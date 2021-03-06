// while(not done){
//   do Work
//   check to see if done 
// };



// let number = 0
// while(number<4){
//   console.log(number)     // this will go on forever since we havent told it to stop
// }
// console.log('after the loop')



/**
 * number: 0
 * 
 * 
 * 
 * /////
 * before the loop 
 * 0
 * 0
 * 
 * 
 * 
 */


 let num = 0
 while(num <=4){
   console.log(num);
   num++;
 }
 console.log('after the loop')
 /********************************** */
//  WHILE LOOP: p1: before the loop starts 
//  while(p2){ : condition to run the code 
//    p3: code you want to run
//    p4: prepare for next iteration 
//  }

//  for(p1;p2;p4){
//    p3;
//  }

 // for loops are good when you know when the end is 

 // for and while loops can be used the same just while can be easier understood in our english language

// print the numbers 10 thru 1 backwards using while loop

// WHILE YOUR STILL HUNGRY, KEEP EATING
// WHILE RECORDING, BLINK THIS RED LIGHT
let numJuan =10;
while(numJuan>0){
  console.log(numJuan);
  numJuan--;
}
console.log('DONE')


let fruit = [
  'apple',
  'banana',
  'cucumber',
  'dragonfruit',
  'elderberry'
]

let i = 0;
while(i<fruit.length){
  console.log(fruit[i]);
  i++;
}

for(let i = 0;i<fruit.length;i++){
  console.log(fruit[i]);
}
