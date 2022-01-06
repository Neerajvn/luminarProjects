class student{

    constructor(name,age,rollno){
        this.name=name;
        this.age=age;
        this.rollno=rollno;
    }

    printStudent(){
        console.log(this.name,this.age,this.rollno);
    }
}

var obj=new student("neeraj",23,123)

obj.printStudent()

