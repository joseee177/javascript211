/**
 * how do i execute callbacks? 
 */

// this function will print a number updated and print it again.
/**
 * 
 * @param {*} callback : the function that defines hpw the number should be updated and takes in the original number
 * @param {*} number : number to print, passed to the callback to get updated 
 */
 let printUpdate=(callback,number)=>{
  console.log('number before the update',number);
  // code to update number
  number=callback(number);  
  console.log('number after the update', number);
 }
// define what should be done not how to do it
 printUpdate((original)=>{
  return original*3;
 },4);


// pretend foreach doesnt exist
/**
 * 
 * @param {*} array : the array to loop thru
 * @param {*} callback : callback the callback to execute on every element in the array
 */
let myForEach = (array,callback)=>{
  for(let i=0;i<array.length;i++){
    callback(array[i],i)
  }
}

let fruit = [
  'apple',
  'banana',
  'clementine'
];
myForEach(fruit,(element)=>{
  console.log(element)
})

// do this using foreach!