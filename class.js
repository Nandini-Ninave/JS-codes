class Std{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    study(){
        console.log(`${this.name} studying`)
    } 
}
const std1 = new Std("std1", 9)
const std2 = new Std("std2", 20)
std1.study()
std2.study()
console.log(std1.name)
console.log(std2.age)