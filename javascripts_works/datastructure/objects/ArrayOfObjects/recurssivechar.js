var pattern="ABABBC"
// var wc={}
// for(let word of pattern){
//     if(word in wc){
//         console.log("first recursive character is",word);
//         break
//     }
//     else{
//         wc[word]=1
//     }
// }

//pgm in single ine
var wc={}
var op=[]
pattern.split("").map(char=>char in wc?op.push(char): wc[char]=1)
console.log(op[0]);