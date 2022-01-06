class person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
}

var obj=new person("ram",25,"male")
obj.printPerson()

var obj1=new person("arun",23,"male")
obj1.printPerson()