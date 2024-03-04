var mysql2 = require('mysql2/promise');

async function list_employees() {
  try {
    const con = await mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "feb7"
    });

    const [rows, fields] = await con.query('SELECT * FROM employees');
    // console.log(rows)  // rows is an Array of JS object 
    for (let emp of rows) {
       console.log(emp.fullname)
    }
    con.end();
  }
  catch (error) {
    console.log("Error --> ", error)
  }
}


list_employees()


    
 