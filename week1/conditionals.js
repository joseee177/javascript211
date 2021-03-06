'use strict'
let tall = true;
let handsome = true;

// if(tall && handsome){
//   console.log("yes please!");
// }else if(tall || handsome){
//     console.log("sure thing");
//   } else{
//     console.log("ehh I'll pass");
//   };

// class example 
let check = (h,t)=>{
  if(h && t){
    return "JACKPOT";
  }else if (h || t){
    return "could be worse";
  } else {
    return "heck no!";
  }
}
console.log(check(handsome, tall));

// if single, less than 75000, you get 600
// if married, together less than 150000, you get 1200
// for every kid, you get additional 600

let stimmy = (marriage,income,kids)=>{
  if(marriage === true){
    if(income<150001){
      return 1200 + kids*600
    } 
    else if (marriage === false){
      if(income<75001){
        return 600 + kids*600
      }
    }
     else{
      return " you made too much buddy"
    }
  }

}
console.log(stimmy(true,74000,3));


// if using a existing repo, for all class, make a file on the outside, call it package.json and copy the package.json of rps and paste it
//if cloning repo like me, youre good   