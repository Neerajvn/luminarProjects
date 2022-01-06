var num1=42;
var num2=39;
var num3=32;
if ((num1>num2)&&(num1>num3)){
    if (num2>num3){
        console.log('second largest num2')
    }
    else{
        console.log('second largest num3')
    }
}
else if ((num2>num1)&&(num2>num3)){
    if (num1>num3){
        console.log('second largest num1')
    }
    else{
        console.log('second largest num3')
    }
}
else if ((num3>num1)&&(num3>num1)) {
   if(num1>num2){
       console.log('second largest is num2')
   }
   else(
       console.log('second largest is num1')
   )
}
else {
    console.log("three number are same")
}