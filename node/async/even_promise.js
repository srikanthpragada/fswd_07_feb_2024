function isEven(num) {

    return new Promise(
        (s, f) => {
            if (num < 0)
                f('Not a valid number')
            else {
                if (num % 2 == 0)
                    s(true)
                else
                    s(false)
            }
        }
    )
 
}

p = isEven(-10)
p.then((result) => console.log(result), (error) => console.log(error))


