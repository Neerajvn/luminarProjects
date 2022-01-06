var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
]


//map

//print all mobile name
var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names); 

//print all mobile price
var mob_price=mobiles.map(price=>price[3])
// console.log(mob_price);

//filter

//print only samsung mobiles
var samsung=mobiles.filter(name=>name[1]=="samsung")
// console.log(samsung);

//print all mobiles under 25000
var mobile=mobiles.filter(price=>price[3]<25000)
// console.log(mobile);

//print mobile details available in price range of 25k-30k
var mobile=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(mobile);

// list all 5g mobile names
var fiveg=mobiles.filter(mob=>mob[6]=="5G")
// console.log(fiveg);

// list all 5g mobiles available under 25000
var mobi=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<25000)
// console.log(mobi);

// list all samsung mobile names whose band=4g and display type AMOLED
var mob_filter=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=='4g' && mob[5]=="AMOLED")
// console.log(mob_filter);

//reduce
//print costly_mobile
var costly_mobile=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)
// console.log(costly_mobile);

// print cheap mobiles
var cheap_mob=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(cheap_mob);

//some (yes or no method)
//can i purchase mobilebelow 10000
var isAvl=mobiles.some(mob=>mob[3]==10000)
// console.log(isAvl);

//can i purchase mobile between 10000&25000
var isAvl=mobiles.some(mob=>mob[3]>10000 && mob[3]>25000)
// console.log(isAvl);

//find (finding or searching an unique item)

//print 1000 id mobile details
var nameById=mobiles.find(mob=>mob[0]==1000)
console.log(nameById);
