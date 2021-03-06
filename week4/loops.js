// Use a do...while loop to console.log the numbers from 1 to 1000.
// let result = " ";
// let i = 0;
//   do{
//     i++;
//     result +=i + ' ';
//   }
//   while(i>0&&i<1001);
//   console.log(result);

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// Create a function that logs out the keys of the object using Object.keys().
 let keyFunc = (obj)=>{
   return Object.keys(obj);
 }
 console.log(keyFunc(person));

// Create a function that logs out the keys and values of the object using Object.entries().
let entriesFunc=(obj)=>{
  return Object.entries(obj);
}
console.log("4",entriesFunc(person))
// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object
// you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [
  {
    firstName: "Jose",
    lastName: "Zuniga",
    birthDate: "January 17, 1995",
    gender: "Male"
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "Dec 20, 2009",
    gender: "Male"
  },
  {
    firstName: "Blake",
    lastName: "Grffin",
    birthDate: "Sept 27, 1993",
    gender: "Male"
  },  
  {
    firstName: "Crysta;",
    lastName: "Cruz",
    birthDate: "August 8, 1986",
    gender: "Female"
    }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
let oddBday=[];
for(let element of arrayOfPersons){
  let oddYear=element.birthDate.slice(-4)
  if(oddYear%2 ==1){
    oddBday.push(element)
  }
}

console.log(oddBday)

// Use .map() to map over the arrayOfPersons and console.log() their information.
  // let mapPeople= arrayOfPersons.map((element)=>{
  //   return element;
  // })
  // console.log(mapPeople);
  let myFriend = (i) => {
    let friendName = [i.firstName,i.lastName,i.birthDate,i.gender].join(" ");
    return friendName;
  }
  console.log(arrayOfPersons.map(myFriend));
// Use .filter() to filter the persons array and console.log only males in the array.
const checkGender = arrayOfPersons.filter((i)=>{
  return i.gender == "Male";
})

console.log(checkGender)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
let genX = (element) => {
  let birthYear = element.birthDate.slice(-3)
  if(birthYear < 1990){
    return true
  }
}

console.log(genX(arrayOfPersons[1]))
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let over21 = (element) => {
  let birthYear = element.birthDate.slice(-4);
  let today = new Date();
  let year = today.getFullYear();
  let age = year - birthYear;
  if(age > 21){
    return true
  } else {
    return false
  }
}

console.log(over21(arrayOfPersons[3]));