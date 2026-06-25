function Std(name, age){
    this.name = name
    this.age = age
    this.show = function(){
        console.log(`${this.name} - ${this.age}`)
    }
}
const student1 = new Std("xyz",9)
student1.show()