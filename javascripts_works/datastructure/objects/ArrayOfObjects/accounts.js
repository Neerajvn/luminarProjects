var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //total no of accounts
  //console.log(accounts.length);

  //print all acc numbers whose ac type=savings '
// let actype=accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

//print balance of acno=1000
// let bal=accounts.find(data=>data.acno==1000).balance
// console.log(bal);


//print gpay transaction details
// accounts.map(data=>data.transactions).flat().filter(trns=>trns.method=="g-pay").forEach(t=>console.log(t))

//print credit transaction of 1002
// accounts.map(data=>data.transactions).flat().filter(trns=>trns.to==1002).forEach(t=>console.log(t))

//print highest balance acc details
// let maxbal=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(maxbal);

//prints transaction history of 1002
// var debitrans=accounts.find(data=>data.acno==1002).transactions
// var creditrans=accounts.map(data=>data.transactions).flat().filter(trns=>trns.to==1002)
// var transactionHistory={"credit Transcation":creditrans, "debit Transcation":debitrans}
// console.log(transactionHistory);