var covid=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
var highest=covid.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(highest);

// q2 district with higest 1 dose vaccination rate
var dose=covid.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
// console.log(dose);
var district=covid.filter((d)=>d[5]==dose)
// console.log(district);

// q3 district with lowest death cases

// q4 sort district with +ve cases

// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details
var tsr=covid.filter(d=>d[1]=="thrissur")
console.log(tsr);

// q8 total nu,ber of +ve cases

// q9 total number of cured cases
var totalCured=covid.map(d=>d[4]).reduce((dc1,dc2)=>dc1+dc2)
//  console.log(totalCured);

// q10 cured numbers of iduky

var curedCases=covid.find(d=>d[1]=="iduky")[4]
// console.log(curedCases);
// q11 total number of death cases
var total=covid.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(total);