//deep copy
// let a = [1,2,3,4]
// let b = [...a]
// b[0] = 10
// console.log(b)
// console.log(a)

// //deep copy
// let a = [1,2,3,4]
// let b = a.map(el=>el)
// b[0] = 10
// console.log(b)
// console.log(a)

//deep copy
// let a = [1,2,3,4]
// let b = a.slice(0)
// b[0] = 10
// console.log(a)
// console.log(b)

//deep copy
// let a = [1,2,3,4]
// let b = JSON.parse(JSON.stringify(a))
// b[0] = 10
// console.log(a)
// console.log(b)

//deep copy
// let a = {person:{name : "name"}}
// let b = JSON.parse(JSON.stringify(a))
// b.person.name = "ename"
// console.log(a)
// console.log(b)

//shallow copy
// let a = {person:{name : {ab:"name"}}}
// let b = {...a}
// b.person.name.ab = "ename"
// console.log(a)
// console.log(b)


//deep copy
// let a = {name:"name",age:0}
// let b = {...a}
// b.name = "ename"
// b.age=9
// console.log(a)
// console.log(b)

//shallow copy
// let a = {person:{name : "name"}}
// let b = Object.assign(a)
// b.person.name = "ename"
// console.log(a)
// console.log(b)


//deep copy
// let a = {person:{name : "name"}}
// let b = {person:{...a.name}}
// b.person.name = "ename"
// console.log(a)
// console.log(b)
