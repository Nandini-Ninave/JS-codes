// let x ={name:"abc"}
// let person={
//     name:"xyz",
//     say : function(a){
//         console.log(`${this. name} - ${a}`)
//     }
// }
// person.say.call(x, 9)

function fun1(name, age){
    this.name = name
    this.age = age
}
function emp(){
    fun1.call(this, "xyz", 20)
    console.log("emp - ", this)
}
function std(){
    fun1.call(this, "abc", 10)
    console.log("std - ", this)
}
const x = new emp()
const y = new std()
