var users = {
    1000: {
        accno: 1000, personName: "ram", balance: 5000, password: "userone",
        transactions: {
            creditTransactions: [],
            debitTransactions: []
        }

    },
    1001: {
        accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
        transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
    1002: {
        accno: 1002, personName: "raju", balance: 8000, password: "userthree",
        transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },
    1003: {
        accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
        transactions: {
            creditTransactions: [],
            debitTransactions: []
        }
    },

}
//print 1000's details
// console.log(users[1000]);

// //print balance of user 1002
// console.log(users[1002].balance);

// //print 1003 person name
// console.log(users[1003].personName);

// //1005 exist or not
// console.log("1005" in users);

//creating authentication fuction
function authentication(accnum,password){
    if(accnum in users){
        let pwd=users[accnum].password
        if(pwd==password){
            return 1
        }
        else{
            return -1
        }
    }
    else{
        return 0
    }
}
// console.log(authentication (1001,"userone"));


//creating transfer fuction
function validateAccountNumber(acno){
    return acno in users?true:false
}
function fundTransfer(from_acno,to_acno,amount){
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)){
        let oldbal=users[from_acno].balance
        if (amount>oldbal){
            console.log("insufficient balance");
        }
        else{
            users[from_acno].balance-=amount
            let from_acno_balance=balanceEnquiry(from_acno)
            console.log(`your acno ${from_acno} account has been debited with ${amount} aval bal ${from_acno_balance}`);
            users[to_acno].balance+=amount
            let to_acno_balance=balanceEnquiry(to_acno)
            console.log(`your acno ${to_acno} account has been credited with ${amount} aval bal ${to_acno_balance}`);
            let crtrans={from:from_acno,amount:amount}
            let dbtrans={to:to_acno,amount:amount}
            users[from_acno].transactions[1].debitTransaction.push(dbtrans) //push transcation to data 
            users[to_acno].transactions[0].creditTransaction.push(crtrans)  //push transcation to data 
        }
    }
    else{
        console.log("invalid account number");
    }
}
fundTransfer(1000,1001,2000) //calling transfer function



// balance enquiry function
function balanceEnquiry(acno){
    if (validateAccountNumber(acno)){
        return users[acno].balance
    }
    else{
        console.log("ivalid Account Number");
    }
}

// console.log(balanceEnquiry(1000));
