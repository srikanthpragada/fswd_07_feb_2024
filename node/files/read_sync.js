const fs = require("fs")

try {
    let data = fs.readFileSync("files/names.txt", "utf-8")
    console.log(data)
}
catch(err) {
    console.log("Error ->" + err.message)
}

console.log(new Date())
