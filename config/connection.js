//dependencies
const mysql = require("mysql");
const connection; 

//heroku jawsDB
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
//create connection
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}
//connect and log errors
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;