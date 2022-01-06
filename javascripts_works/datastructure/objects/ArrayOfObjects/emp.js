//OOP

//class=>prototype  
//object=>real world entity
//reference

//create employee object with props eid,ename,salary,desig
var employee={
    eid:1000,
    ename:"arun",
    salary:25000,
    desig:"developer"
}
console.log(employee.desig); //print design in emp
employee.experience=2 //add extra key 

console.log("gender" in employee); //check key available 

if ("experience" in employee){
    employee.experience+=1
}
else{
    employee.experience=1
}
console.log(employee); // print all data in emp