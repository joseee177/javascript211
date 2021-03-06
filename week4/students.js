let students =[];

students.push({
  name:'Jimbo',
  passing: false,

})

students.push({
  name:'Jay',
  passing: true,
  
})
students.push({
  name:'Bob',
  passing: true,
  
})
students.push({
  name:'Mclain',
  passing: false,
  
})
students.push({
  name:'toolman',
  passing: true,
  
})

/**
 * use filter method on students array to filter dpwn to just failing students
 * 
 * then use foreach method on the failing students to print their names
 * 
 */

let failingStudents = students.filter((student)=>{
  if(student.passing ==false){
    return true;
  }else{
    return false;
  }
})
failingStudents.forEach((student)=>{
  console.log(`you have to do better ${student.name}`)
});

// use the filter to filter down to the failing students, 
// use the map to generate a message to those failing students 
// use the foreach to console log the message 
