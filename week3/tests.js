/**
 * writing your tests before you code IS CALLED TEST DRIVEN DEVELOPMENT
 * 
 *
 * @param {*} width 
 * @param {*} height 
 */
// write a function that takes in the height and width
// of a triangle & returns the area 

let triangleArea = (width,height)=>{
 
  let area =  (width * height) /2
 return area
}

console.log(triangleArea(5,5));

///////////////////////////////
const assert = require('assert'); // makes an error or passes 
describe('Testing Valid Triangles', ()=>{

  it("Testing the Unit triangle",()=>{
    let actual = triangleArea(1,1);
    let expected = .5;
    assert.equal(actual, expected);
  })
  it('height grader than 1',()=>{// first will be the name of my test. 2nd param will be function running my test
    let actual = triangleArea(1,2);
    let expected = 1;
    assert.equal(actual,expected);
  })
  it('base greater than 1',()=>{
    let actual = triangleArea(2,1);
    let expected = 1;
    assert.equal(actual,expected);
  })

  it('both height and base greater than 1',()=>{
    let actual= triangleArea(2,2);
    let expected = 2;
    assert.equal(actual,expected);
  })


})

describe('invalid input', ()=>{
  it('negative height',()=>{
    let actual = triangleArea(2,-2);
    let expected = undefined;
    assert.equal(actual, expected);
  })


})

// CAREFUL!! your tests can have bugs, which can throw you off 

// write 3 tests for rps: ASSIGNMENT

// DONE 