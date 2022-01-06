var low_limit=10,upper_limit=50,i=10;
if(low_limit>upper_limit){
    console.log("pls enter correct value of low limit")
}
else{
    while(low_limit<=upper_limit){
        if(low_limit%2==0){
            console.log(low_limit)
        }
        low_limit++;
    }
}
