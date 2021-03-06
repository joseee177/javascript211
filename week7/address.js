'user strict'
console.log('hi there');

let getButton= document.getElementById('getUsersButton');
getButton.addEventListener('click',()=>{
  console.log('get users got clicked');

console.log('before calling the api')
// make the api call and get a promise to connect our call back to
let fetchResult=fetch("https://randomuser.me/api/?results=10");

let jsonResponse = fetchResult.then((response)=>{
  console.log('processing the results ', response);
  return response.json();
})
jsonResponse.then((json)=>{
  console.log('the json payload',json.results[0]['name']['first'])// or [0].name.first

  let myUsers =(json.results[0].name.first)
  console.log(myUsers)

})
});
// print out the first name of the user in position [0]in the results array


// this specific api returns 2 things 
    // an object results and an info object
      // we have to  acomodate to it so we use dot notation or brackets to get what we need 


// api example is like ordering amazon 
  // you make a request and when it arrives it arrives as how amazon sends it:
    // as a package
    // you then decide how to cypher it 
    