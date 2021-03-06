// loops thru some code for however many times you specify.
// can be run on objects and arrays
//for of/ for in/ while/ do-while, for loops

// FOR LOOPS
  // have 3 statements 
    // 1. statement that is run before the loop starts. executed only once.
    // 2. this is the condition that decides if it should go again. true/false 
    // 3. the code that should be executed every time(iteration)
    // 4. what to do to prepare for the next iteration(round)


       // example: 
// for(1;2;4)[
//   3
// ]       

// print numbers 1-5
// 1. set a variable to hold the number 1
// 2. ask if the variable is less than or equal to 5
// 3. print the variable 
// 4. increent the variable by 1

for(let i=1;i<=5;i++){
  console.log(i);
}

for(let i=2;i<=20;i++){
  if(i%2 ==0){
    console.log(i)
  }
}



for(let i =1;i<=45;i++){
  if(i%3 == 0 && i%5 == 0){
    console.log("fizz Buzz")
  } else if(i%5 == 0){
    console.log('buzz')
  } else if(i%3 == 0){
    console.log('fizz')
  } else {
    console.log(i)
  }
}

