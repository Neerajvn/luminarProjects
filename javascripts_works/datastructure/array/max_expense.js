//max expense

var arr=[20000,25000,30000,35000,35000]
let max=0;
for(let amount of arr){
    if(max<amount){
        max=amount;
    }
    
}
console.log(max);