const fs = require("fs")


fs.readFile(__dirname + "/names.txt", "utf-8",
    (err, data) => {
        if (err)
            console.log("Error " + err.message)
        else {
            // write to names2.txt
            fs.writeFile(__dirname + "/names2.txt", data,
                 () => console.log("Copied!"))
        }
    })


