const fs = require("fs").promises

let p = fs.readFile(__dirname + "/names3.tx", "utf-8")

p.then (data => console.log(data))                  // fulfilled 
 .catch(error => console.log('Error :' + error))   // reject

console.log("The End!")




