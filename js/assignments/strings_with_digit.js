function containsDigit(s) {
    return /\d/.test(s)
}

let names = ['abc', 'xyz123', 'pqr5', 'def', 'bec1']

let selNames = names.filter(containsDigit)
console.log(selNames)

selNames = names.filter(s => /\d/.test(s))
console.log(selNames)
