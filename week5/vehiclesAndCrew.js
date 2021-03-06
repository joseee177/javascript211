/**
 * 
 * 2 classes:
 * 1. crewmember 
 *  crewOnBoard: an array of crewmembers onboard the vehicles
 *  crewmember have titles:(captain,engineer,driver)
 * 
 * 2. vehicle: have type: 
 * type of vehucle(ship,bus,train)
 *  and name/id: name of vehicle
 *  crewmember have titles:(captain,engineer,driver) only thing being 
 * passed in!!!
 *  
 * method: isready(): this method should return true if the vehicle is ready 
 * to go if there is the correct crewmember on board the vehicle 
 */


// for extra practice, a crewmember cannot be in more than one vehicle.


/**
 * crewMember:
 * attribute: title, name, assignedVehicle
 * method: assignedVehicle(Vehicle)
 * 
 * Vehicle: 
 * attribute: type,name,assignedCrew
 * method: isReady()
 */

 class Crewmember {
  constructor(title,name,assignedVehicle){
    this.title=title;
    this.name=name;
    this.vehicle=assignedVehicle;
  }
  assignedVehicle(vehicle){
      // you should have the entire vhicle available
      // use .push()
  }
 }

class Vehicle {
  constructor(type,name,assignedCrew){
    this.type=type;
    this.name=name;
    this.assignedCrew;
  }
  isReady(){
    // conditional statement 
  }
}

let plane1=new vehicle('Plane','Big Bertha');
let plane2=new vehicle("plane","Tiny Tim");

let train1= new vehicle("Train","Thomas");
let bus = new vehicle('Bus','Big Red');

let c1=new Crewmember('Pilot','John');
let c2=new Crewmember('engineer','madmax');

console.log(plane1.isReady()); // false

c1.assignedVehicle(plane2);
console.log(plane2.isReady()); // true

c2.assignedVehicle(bus);
console.log(bus); // false

// USING CONDITIONALS TO DO HW 