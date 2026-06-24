const std = {
    name : "xyz",
    age : 12,
    fun(){
        console.log(`${this.name} - ${this.age}`)
    }
};
std.fun();
console.log()