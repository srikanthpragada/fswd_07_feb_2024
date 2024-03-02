let p = new Promise(
    (s, f) => {
        // process 
        console.log('Processing....')
        s();
    }
)


p.then(() => console.log("Success"), error => console.log("Error"))
