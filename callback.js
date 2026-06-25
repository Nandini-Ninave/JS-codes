function fun1(callback){
    console.log("fun1")
    callback()
}
function fun2(){
    console.log("fun2")
}
fun1(fun2)