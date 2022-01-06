var baleno={
    colors:["red","white","blue"],
    varients:["petrol"],
    price:"8lakhs",
    manufacture:"nexa",
    getPrice(){
        return this.price
    }

}

var glanza={
    manufacture:"toyota",
    price:"9lakhs"
}

glanza.__proto__=baleno
console.log(glanza.getPrice());