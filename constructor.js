function std(name, age){
    this.name = name
    this.age = age
    this.show = function(){
        console.log(`${this.name} - ${this.age}`)
    }
}
const student1 = new std("xyz",9)
console.log(student1)