var arr=[9,6,7,8,3,2]
//if num<5 num-1
//if num.5 num+1
var op=[];
for(let num of arr){
    num>5?op.push(num+1):op.push(num-1)
    }
console.log(op);