var arr=[2,3,4,5]
var element=8;
var flag=0;
var low=0, upp=arr.length-1
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    if(element==cur_sum){
        console.log(`pairs (${arr[low]},${arr[upp]})`);
        flag++
        break
    }
    else if(cur_sum<element){
        low++;
    }
    else if(cur_sum>element){
        upp--;
    }
}
if (flag==0){
    console.log(`no pairs`);
}















