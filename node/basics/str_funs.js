
function containsUpper(st) {
    for (let i = 0; i < st.length; i++) {
        if (st.charCodeAt(i) >= 65 && st.charCodeAt(i) <= 90)  // uppercase letter 
            return true
    }

    return false  // no uppercase letter found 
}

function countUpper(st) {
    let count = 0
    for (let i = 0; i < st.length; i++)
        if (st.charCodeAt(i) >= 65 && st.charCodeAt(i) <= 90)
            count++;

    return count;
}

function exists(main_str, sub_str) {
    return main_str.includes(sub_str)
}

// Testing 
// console.log(containsUpper('Abc'))
// console.log(exists('Hello', 'Lo'))

// module.exports.containsUpper = containsUpper
// module.exports.exists = exists

module.exports = { containsUpper, exists, countUpper }