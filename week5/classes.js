// classess 
  // can use as a template
  // its easier to create multiple ojbjects with the same properties 
  // there is built in METHODS of your own: FUNCTIONS INSIDE THE CLASS

  // concept of a constructor 

  //difference between methods and functions : 


  // example 
   let assert = require('assert');
class Car {
  // what is the effieciency of this car
  mpg;
  //the capacity of the gas tank in gallons
  tankCapacity;
  //current fuel level in gallons-how much gas my car has
  fuelLevel=0;
  //the id of the car
  id;
  //number of miles on car
  odometer=0;
  constructor(inputmpg,inputtankcapacity){ // this is the constructor 
    //this method gets calld when the new instance is constructed 
          // generate a random number between 0-1 and multiply by 10,000
          // then round down using math.floor to get a whole number 
        let randomnum= Math.floor((Math.random()*10000))
        this.id=randomnum;
        this.mpg=inputmpg;
        this.tankCapacity=inputtankcapacity;
  }
  // drive, affects fuel level and odometer
  // fuelup, affects fuel level 

  //write a method that will simulate filling up
  /**
   * 
   * @param {*} gallons : number of gallons to add 
   */
  addFuel(gallons){
    this.fuelLevel=this.fuelLevel+gallons;
  }
  /**
   * this method returns the number of miles this car can drive before it runs out of gas
   */
  milesToempty(){
    // if my car is 26mpg car, and it has 1 gallon: go 26 miles
    // if my car is 26mpg car, and it has 2 gallon: go 52 miles
    // if my car is 26mpg car, and it has 1/2 gallon: go 13 miles
      this.mpg * this.fuelLevel;

  }
  /**
   * drive the car for a certain number of miles
   * and update the fuel tank and odometer accordingly 
   * @param distance: number of miles to drive 
   */
  drive(distance){
    this.odometer = this.odometer+distance;
    // mpg: 20 mpg
    // level: 10 gallons
    // drive: 20 miles
    // use 1 gallon

    // // mpg: 20 mpg
    // level: 10 gallons
    // drive: 10 miles
    // use .5 gallon

    // mpg: 20 mpg
    // level: 10 gallons
    // drive: 40 miles
    // use 2 gallon
    let fuelused= distance / this.mpg;
    this.fuelLevel = this.fuelLevel - fuelused;
  }
}

let pinto= new Car(26,11);
console.log(pinto)
console.log(pinto.fuelLevel)

pinto.addFuel(3)
pinto.drive(10)
console.log(pinto)


describe('test set 1',()=>{
  it('not overfill',()=>{
    let c1= new Car(10,2);
    c1.addFuel(100);
    let expected = 2;
    assert.equal(c1.fuelLevel,expected);
  })
  it('not drive past empty', ()=>{
    let c2 = new Car(10,2);
    c2.addFuel(2);
    c2.drive(1000);

    let expected = 20;
    assert.equal(c2.odometer, 20);
    assert.equal(c2.fuelLevel,0);
  })
})
