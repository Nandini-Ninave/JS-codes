class Std{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    study(){
        console.log(`${this.name} studying`)
    } 
}
class Emp extends Std{
    constructor(name){
        super(name)
    }
    work(){
        console.log(`${this.name} works`) 
    }
}
const std1 = new Std("std1", 9)
const std2 = new Std("std2", 20)
std1.study()
std2.study()
console.log(std1.name)
console.log(std2.age)
const emp1 = new Emp("emp1")
emp1.work()