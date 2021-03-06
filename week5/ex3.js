/**
 * a class that represents a triangle
 */

 class rectangle{
  length;
  width;
   constructor(inputwidth,inputheight,){
    this.length=inputheight;
    this.width=inputwidth;
   }
   area(){
    return this.length * this.width;
   }; perimeter(){
    return (this.length +this.width) *2;
   };
   isRightTriangle(){
    if(this.length ===this.width){
      return true;
    } else {
      return false;
    };
   };
 };


let rec1 = new rectangle(5,4);

console.log(`area is: ${rec1.area()}`);
console.log(`perimeter is: ${rec1.perimeter()}`);
console.log(`is this a square? : ${rec1.isRightTriangle()}`);

console.log('***********************************')

let rec2 = new rectangle (6,6);

console.log(`area is: ${rec2.area()}`);
console.log(`perimeter is: ${rec2.perimeter()}`);
console.log(`is this a square? : ${rec2.isRightTriangle()}`);



/////////////////////////////


let someArray = []
myForEach(someArray,(element,index)=>{
  // do something 
})


let myForEach = (array,callback)=>{
  // write the code that will loop thru everyelement in the array
  // and excute the callback for that element 
  for(leti=0;i<array.length;i++){
    let element = array[i];
  }
  callback(element,i);
}