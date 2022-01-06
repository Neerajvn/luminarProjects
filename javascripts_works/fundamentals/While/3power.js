var num=123;res=0;sum=0;;
while(num!=0){
    let digit=num%10;
    res=digit**3;
    sum=sum+res;
    num=Math.floor(num/10)
}
console.log(sum);