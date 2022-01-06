//min expense

var arr=[20000,25000,30000,35000,35000]
let min=arr[0];
for(let amount of arr){
    if(min>amount){
        min=amount;
    } 
}
console.log(min);  
