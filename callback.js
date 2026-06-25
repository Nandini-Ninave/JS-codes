// function fun1(callback){
//     console.log("fun1")
//     callback()
// }
// function fun2(){
//     console.log("fun2")
// }
// fun1(fun2)

//Callback functional handling
function calculation(a, b, callback){
    return callback(a,b)
}
function add(a,b){
    console.log(a+b)
}
function mul(a,b){
    console.log(a*b)
}
calculation(2, 3, add)
calculation(2, 3, mul)