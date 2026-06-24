function outermost(){
    let x = 5
    function outer(){
        const x = 10
        function inner(){
            console.log(x)
            console.log(a)
        }
        inner()
    }
    outer()
}
let a = 7
outermost()
