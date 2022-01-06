//METHOD OVERRIDING

class Parent{
    bike(){
        console.log("passion pro");
    }
}

class Child extends Parent{

    bike(){
        super.bike() //---calling parent bike also
        console.log('royal enfield');
    }
}
var ch=new Child()
ch.bike()

//this()--current obj
//super()--parent refer
//constructor()--intialize instance variable
//