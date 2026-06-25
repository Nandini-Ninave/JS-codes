const fun1={
    name1 : "fun1"
}
const fun2={
    name2 : "fun2",
}
const fun3={
    name3 : "fun3",
    __proto__:fun2
}
console.log(fun3.name2)