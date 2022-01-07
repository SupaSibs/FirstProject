//mongoose db
let mongoose = require("mongoose");
//connects to mongoose and uses promises
mongoose.connect("mongodb://localhost:27017/Learning-Node")
.then(() => { db = 
mongoose.connetion;
console.log("Connection successful.")
})
.catch(() => alert("Connection to Database failed. Please try again later."));

//checks if db exists, if it does it adds the email to the db
if (db) {
}
