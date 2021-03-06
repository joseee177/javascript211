class Square {
  side;
  constructor(inputside){ // cant use input side outside the constructor line 3-5
    this.side=inputside;
  }

  //return perimeter of square 
  perimeter(){
    return 4* this.side;
  }
  // return area of square
  area(){
    return this.side*this.side;
  }
}

let s1=new Square(4);
let s2 = new Square(2);

console.log(s1.area());
console.log(s1.perimeter());

console.log(s2.area());
console.log(s2.perimeter());