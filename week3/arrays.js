// they use square brackets 
//// they hold strings, numbers, booleans, objects, arrays


// 
let fruit = [
  'apple',
  'banana',
  'cucumber',
  'dragonfruit',
  'eggplant'
];
console.log(fruit[0]); // prints out first fruit

for(let i = 0;i<=4;i++){
  console.log(fruit[i]);
};

//write a function that takes in an array of fruit of size 3 
// return true if fruit inside array are the same 
/**
 * 
 * @param {*} fruit 
 */
let same3 = (fruit)=>{
  if(fruit.length <3){ // if array has less than 3, false
    return false;
  }
  //if first fruit eqyals sec
  // and sec equals 3rd
  // and the first is not empty
  // return true
  if(fruit[0] == fruit[1] && fruit[1] == fruit[2] && fruit[0] != ''){
    return true;
  } 
  // else return fa;se 
  return false; 
}
const assert  = require("assert"); // i wasnt passing at first because "assert was under console."




// write a function that will put a fruit in the position passed in
/**
 * 
 * @param {*} position to add the fruit
 * @param {*} toAdd 
 * @param {*} theFruitArray 
 */
let addFruit = (position, toAdd,theFruitArray)=>{
  theFruitArray[position] = toAdd;
  //fruit[0] ='apple'
}
let basket = [];
addFruit(0,'apple',basket);
console.log(`this is in my basket of fruits: ${basket}`);

if(typeof describe == 'function'){
// these are the tests we made for the function
describe('array size 3', function(){
  it("all the same", function(){
    let actual = same3(['apple', 'apple', 'apple']);
    let expected = true;
    assert.equal(actual, expected)})
  it("2 the same", function(){
    let actual = same3(['apple', 'banana', 'apple']);
    let expected = false;
    assert.equal(actual, expected)})
  it("all different ", function(){
    let actual = same3(['kiwi', 'banana', 'apple']);
    let expected = false;
    assert.equal(actual, expected)
  })
})
describe('array bigger than 3', function(){
it("first 3 the same", function(){
  let actual = same3(['apple', 'apple', 'apple', 'banana']);
  let expected = true;
  assert.equal(actual, expected)
})
it("first 3 different the same", function(){
  let actual = same3(['apple', 'banana', 'kiwiw', 'mellon']);
  let expected = false;
  assert.equal(actual, expected)
  })
})
describe('array less than 3', function(){
  it("size 2 ", function(){
    let actual = same3(['apple', 'banana']);
    let expected = false;
    assert.equal(actual, expected)})
  it("first 2 the same", function(){
    let actual = same3(['apple', 'apple']);
    let expected = false;
    assert.equal(actual, expected)
  })
})
}

//talked in the begininning how arrays hold a bunch of stuff
 //we worked with strings
  //it can hold collection of collections
    // like inside grocery basket-> you can have a collectin of pokemon cards

// if you think of ttt grid, its a collection of positions


//      +       +
//   0  +   1   +    2
// -----+-------+--------
//   3  +   4   +
// -----+-------+--------
//      +       +
//      +       + 



     let board = [
       ['x','0','x'],
       ['0','x','0'],
       ['0','x','x']
     ]