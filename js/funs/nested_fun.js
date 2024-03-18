// Simple nested function 
function outer(a) {
    var v = 100
    function inner(b) {
        // Nested function can access variables and parameters of outer function
        console.log(a, b, v)
    }
    
    inner(20)
}

outer(10)