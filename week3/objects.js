/**
 * objects could be strings 
 * they can be added to arrays
 * they have key (properties) and values 
 * they can have data time, numbers,boolean,other objects, arrays 
 * 
 * 
 * 
 */


 let myFriend = {
   name: "john",
   age: 12,
   address:"123 main st, austin, tx, ",
   isMale: true,
   bestFriend: false
 }


 let otherFriend = {
   name: "jenny",
   age: 39,
   address: '9876 congress ave, austin tx',
   isMale: false,
   bestFriend: true
 }

let friends =[myFriend, otherFriend];

 // hi {name}, please text me when you get this.
   // how can i generate this message without writing there names? 

for(let i = 0;i<friends.length;i++){
let currentFriend = friends[i]
let text = `hi ${currentFriend.name}, please text me when you get this.`;
 console.log(text);
}

/*****************************************/



let fruit = [{
  name: 'apple',
  color: ['red','green','yellow'],
  properties: ["juicy",'tart','sandy','crunchy']
},
{ 
  name: 'Banana',
  color: ["yellow",'green','black'],
  properties: ["squishy"]

},
{
  name: 'orange',
  color: 'orange',
  properties: ['sour']
},
{
  name: 'grape',
  color: ['green','purple','red','black'],
  properties: ['seedless','juicy','boozy']
}];

//loop thru the array of fruit,
//and print out the following descriptyion: 
  //an x is an awesome fruit that can be found in x colors.
  //some unique attributes of x is that they are x,x,x,x.

// for(let i =0;i<fruit.length;i++){
//     console.log(`an ${fruit.name} is an awesome fruit that can be found in ${fruit.color}. 
//     Some unique attributes of ${fruit.name} is that they are ${fruit.properties}`)
//   }



  for(let i =0;i < fruit.length;i++){
    let currentFruit= fruit[i];
    let  numColors = currentFruit.color.length;
    let name = currentFruit.name;
    let properties = currentFruit.properties;

    
  }