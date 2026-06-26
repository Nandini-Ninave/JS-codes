// const x = 9
// function fun(a){
//     console.log(`${this}-${a}`)
// }
// let res = fun.bind(x, 90)
// res()


// const obj = {name:"pari"}
// function fun(){
//     this.name = "xyz"
//     console.log(this.name)
// }
// const x = fun.bind(obj)
// x()

const obj = {name:"pari"}
function fun(){
    this.name = "xyz"
    this.name = "abc"
    console.log(this)
}
const x = fun.bind()
x()