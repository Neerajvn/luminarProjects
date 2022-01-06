var arr=[10,9,11,85,50];
var element=50;
var flag=0;
for( num of arr){
    if(element==num){
        flag=1;
        break;;
    }
    ;
}
console.log(flag==0?"not found":"found");