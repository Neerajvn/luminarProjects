for(let i=1;i<=4;i++){
    let str=""
    for(let j=1;j<=7;j++){
        if(i==4 || i+j==5 || j+i==3){
            str+="*";
        }
    }
    console.log(str);
}