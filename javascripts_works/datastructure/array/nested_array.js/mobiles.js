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

//costly mobile brand
mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0][1]);

// print snapdragon processor mobiles
for (mobile of mobiles){
    if (mobile[4]=="snapdragon"){
        // console.log(mobile);
    }
}

//print costly mobile with processor snapdragon with 5g band
var snap_5g=[]
for(let mob of mobiles){
    if (mob[4]=="snapdragon" && mob[6]=="5g"){
        snap_5g.push(mob)
    }
}
snap_5g.sort((m1,m2)=>m2[3]-m1[3])
console.log(snap_5g[0]);