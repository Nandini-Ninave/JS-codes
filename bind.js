const x = 9
function fun(a){
    console.log(`${this}-${a}`)
}
let res = fun.bind(x, 90)
res()