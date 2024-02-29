const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names.txt", "utf-8")

p.then (data => console.log(data))     // fulfilled 
p.catch(error => console.log(error))   // reject

console.log("The End!")




