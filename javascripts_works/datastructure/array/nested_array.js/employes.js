var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//print all employe name 
for(let employee of employees){
    console.log(employee[1]);
}

 //prints developers name
for(let employee of employees){
    if (employee[3]=="developer"){
        console.log(employee[1]);
    }
}

//find experience in each employee
for(let employee of employees){
    console.log(employee[5]-employee[4]);
}

//print employee full details who exp>10
for(let employee of employees){
    if(employee[5]-employee[4]>10){
        console.log(employee);
    }
}

//print highest salaray
var max_salary=0
for(let employee of employees){
    if(employee[2]>max_salary){
        max_salary=employee[2]
    }
}
console.log(max_salary);

//print secong highest salary
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[1][2]);

//print minimum salary
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[employees.length-1][2]);

//number of employees 
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees.length)

//highest salary amoung developers
var developer=[]
for(let employe of employees){
    if (employe[3]=="developer"){
        developer.push(employe)
    }
}
developer.sort((d1,d2)=>d2[2]-d1[2])
console.log(developer[0][2]);

//print details of employees whose name start with A
for(let employee of employees){
    if (employee[1][0]=="a" || employee[1][0]=="A"){
        console.log(employee[1]);
    }
}

//print details of employees who were working int period of 2010 to 2015
for(let employee of employees){
    if (employee[4]>2009 && employee[5]<2016){
        console.log(employee);
    }
}