var arr=[2,4,6,5];
var sum=0;
for (let num of arr){
    sum+=num;
}
var op=[]
for (let num of arr){
    op.push((sum-num))

}
console.log(op);