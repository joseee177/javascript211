// make a simple class that represents a person
//- name attribute that holds a persons name 
//- job attribute that holds a person/'s job title 

// class Job {
//   constructor(name, job){
//     this.name = "jose";
//     this.job = "Mover";
//   }
// }

// console.log(class Job); // i guess i did it wrong.

// parent class 
class Person {
  name;
  title;

  constructor(inputname, inputtitle){
    this.name = inputname;
    this.title = inputtitle;
  }
  hi(){
    return `hi my name is ${this.name}. nice to meet you `
  }
}

let mike = new Person("Mike Wazzoski", "Trainer");
let batman = new Person("Bruce Wayne", "Hero");

//heros. this is a child class 
class Hero extends Person{
  superpower;

  constructor(inputname,inputtitle,inputSuperPower){
    super(inputname, inputtitle) // pass the 2 attributes to be handles by the base classes constructor 
    this.superpower = inputSuperPower;
  }
// might have superpower
}
let newBatman = 



// villains
  class Villains extends Person{
    
  }

class Car {

}

class Truck extends Car{
  // extends from class car 
}
 
class MonsterTruck extends Truck{

}

// musical instruments 
// brass instruments which extends from musical instruments
// trumpets extends brass instruments which extends from brass instruments 

// police officer which extends hero whixh extends from people

// managers extends employees

// football players extends team members extends athletes