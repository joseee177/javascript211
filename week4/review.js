let cars = [
  {
    make:'ford',
    model: 'focus',
    cylinder: 4,
    colors: ['red','blue','cyan','green']
  },{
    make:'Mazda',
    model: 'Protege',
    cylinder: 4,
    colors: ['blue','red','green']
  },{
    make:'bmq',
    model: '328i',
    cylinder: 4,
    colors: ['silver','black']
  },{
    make:'Maserati',
    model: 'x',
    cylinder: 8,
    colors: ['orange','neon green']
  },{
    make:'Vw',
    model: 'bug',
    cylinder: 2,
    colors: ['yellow','rust']
  }
]
// filter gives you every element that meets that criteria
let myOptions=cars.filter((car)=>{
  if(car.cylinder==4){
    return true;
  }
}).filter((car)=>{
  if(car.colors.indexOf('red')>-1){ // index of returns -1 if there is no red in this case. also use '>=0'
    return true;
  }
}).map((car)=>{
  return `The ${car.make} ${car.model} is a nice ${car.cylinder} cylinder car that is available in ${car.colors.join(', ')}`;
}).forEach((description)=>{
  // console.log(description);
});


// find(): what pops out of find() is ONE element that meets the criteria. returns the first object found 
let someCar=cars.find((car)=>{
  if(car.cylinder==4){
    return true;
  };
});
console.log(someCar);

// filter(): returns ALL elements that meet criteria into an ARRAY  

///////////////////////////////////////////////////////////////////////////////

// REDUCE: reduce the array to ONE thing. can return somethng that is not in the array...

///////////////////////////////////////////////////////////////////////////////

// REDUCE !!!!
// 1. what came in the previous round
// 2. what is the current Number
// 3. what should go in the next round 
// 4. 

let numbers =[45,93,13,52,87];

// if you want to sum, the the next value is the sum of prev and current 
let sum = numbers.reduce((previous,current,)=>{
  return previous+current;
},0)
console.log(sum)

let max = numbers.reduce((previous,current,index)=>{
  if(previous<current){
    return current;
  }else{
    return previous
  }
})
console.log('max',max)
let maxs = numbers.reduce((previous,current,index)=>{
  if(current>previous){
    return current;
  }else{
    return previous
  }
})
console.log(maxs,'maxs');