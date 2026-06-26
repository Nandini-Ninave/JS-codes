let x ={name:"abc"}
let person={
    name:"xyz",
    say : function(...a){
        console.log(`${this. name} - ${a}`)
    }
}
person.say.apply(x, [1,2,3,4])