const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names.txt", "utf-8")

p.then(data => {
    let wp = fs.writeFile(__dirname + "/names2.txt", data)
    wp.then(() => console.log("Copied"))
   }
)


