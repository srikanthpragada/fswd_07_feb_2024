function isEven(n) {
    return n % 2 === 0
}

exports.nextEven = function(n) {
    if (isEven(n))
        return n + 2
    else
        return n + 1
}

exports.PI = 3.14 
exports.isEven = isEven 
