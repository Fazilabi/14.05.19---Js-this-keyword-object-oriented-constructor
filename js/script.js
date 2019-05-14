function Employee(_name, _surname, _age){
    this.name=_name;
    this.surname=_surname;
    this.age=_age;
    this.shoInfos=function(){
        console.log(_name+" "+_surname+" "+_age);
        console.log(this.name+" "+this.surname+" "+this.age);
    }
}

let emp1=new Employee("Fazil", "Qurbanov", 30);
let emp2=new Employee("Ali", "Aliyev", 29);

emp1.shoInfos();
emp2.shoInfos();