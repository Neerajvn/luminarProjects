//map()
//filter()
//reduce()
//sort()
//some()
//find()
//forEach()

//map

//applying map() - apply square to all numbers
var arr=[2,3,4,5,6,7,8]
var squares=arr.map(num=>num**2)
// console.log(squares);

//applying map() - add 2  to all numbers
var add=arr.map(num=>num+2)
// console.log(add);

//convert low to uppercase
var names=["ram","ravi","arjun"]
var uppname=names.map(name=>name.toUpperCase())
// console.log(uppname);

//filter

//print even numbers
var arr=[2,3,4,5,6,7,8]
var even=arr.filter(num=>num%2==0)
// console.log(even);

//print names start with a 
var names=["ram","ravi","arjun","ARUN"]
var aname=names.filter(name=>name[0]=="a" || name[0]=="A")
// console.log(aname);

//reduce
var arr=[2,3,4,5,6,7,8]

//print total sum
var sum=arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);

//print max value
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// print min value
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);
