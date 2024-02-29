let p = new Promise(
    (s, f) => {
        // process 
        console.log('Processing....')
        s();
    }
)

console.log(p)
p.then(() => console.log("Success"))
p.catch(() => console.log("Error"))

