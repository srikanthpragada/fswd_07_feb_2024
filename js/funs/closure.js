function outer(a) {
    // closure
    function inner(b) {
        return a * b;
    }

    return inner //return inner function
}

fnInner1 = outer(10)
console.log(fnInner1(20))


fnInner2 = outer(20)
console.log(fnInner2(30))
 