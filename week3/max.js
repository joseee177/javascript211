'use strict'

// function takes in array of numbers and returns the largest 
// number in the array
// if array empty, return null


let largest = (num)=>{
  if(!num){// checks for a null or undefineced varaiable, if array is empty
    return null;
  }
  if(num.length == 0){// explicitly checjs if the array is empty
    return null;
  }
  // write down first number
  let piecePaper = num[0]

  //loop thru all the subsequent numbers in the array
  for(let i=1;i<num.length;i++){
    let nextNum=num[i];

    if(nextNum > piecePaper){
      piecePaper =nextNum;
    } else {
      //do nothing. DONT NEED ELSE, ONLY FOR HUMAN EYES
    } 
  }return piecePaper;
}

let test1 = []// null
let test2 = undefined // null 
let test3 =[6,13,33,53,62,72,72,45,67]// 72
let test4 = [12] //12
let test5 = [-123,123,12,4,521,] //521

console.log(largest(test3));
console.log(largest(test5));
console.log(largest(test2));