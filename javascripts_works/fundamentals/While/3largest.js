var num1=42;
var num2=52;
var num3=32;
if ((num1>num2)&&(num1>num3)){
    console.log("num1 is largest")
}
else if ((num2>num1)&&(num2>num3)){
    console.log("num2 is largest")
}
else if ((num3>num1)&&(num3>num1)) {
    console.log("num3 is largest")
}
else {
    console.log("three number are same")
}