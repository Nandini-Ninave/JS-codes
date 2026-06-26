let x ={name:"abc"}
let person={
    name:"xyz",
    say : function(a){
        console.log(`${this. name} - ${a}`)
    }
}
person.say.call(x, 9)