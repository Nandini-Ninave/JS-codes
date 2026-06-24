function outermost(){
    let x = 5
    function outer(){
        const a = 10
        function inner(){
            console.log(x)
            console.log(a)
        }
        inner()
    }
    outer()
}
outermost()
