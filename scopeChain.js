function outermost(){
    var x = 5
    function outer(){
        var a = 10
        function inner(){
            console.log(x)
        }
        inner()
    }
    outer()
}
outermost()
