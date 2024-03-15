// Simple nested function 
function outer(a) {

    function inner(b) {
        // Nested function can access variables and parameters of outer function
        console.log(a, b)
    }
    
    inner(20)
}

outer(10)