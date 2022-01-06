var pattern="ABACC"
var op=[]
for (let char of pattern){
    if (op.includes(char)){
        console.log(char, `is recurssive character`)
        break;
    }
    else{
        op.push(char)
    }
}
