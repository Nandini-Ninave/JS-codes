const std = {
    name : "xyz",
    age : 12,
    name : "abc",
    fun(){
        console.log(`${this.name} - ${this.age}`)
    }
};
std.fun();
