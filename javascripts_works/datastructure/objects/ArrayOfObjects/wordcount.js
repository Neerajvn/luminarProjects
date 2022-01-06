var text="hello hai hello hai"
// //to print word count
// // hello=2, hai=2
// var wc={}
// var words=text.split(" ")
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }else{
//         wc[word]=1
//     }
// }

// console.log(wc);

//pgm in single ine
var wc={}
text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
console.log(wc);