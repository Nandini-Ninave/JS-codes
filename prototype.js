function fun(n){
    this.n = n
}
fun.prototype.inner = function(){
    console.log("inner")
}
console.log("xyz")
fun.prototype.inner()