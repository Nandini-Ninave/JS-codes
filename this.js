const std = {
    name : "xyz",
    age : 12,
    fun(){
        this.name = "abc"
        console.log(`${this.name} - ${this.age}`)
    }
};
console.log(std.name)
std.fun();
console.log(std.name)
