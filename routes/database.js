//mongoose db, express.js and router settings
let express = require("express")
let router = express.Router();
let mongoose = require("mongoose");
//gets lead email to add to the database
router.get("/", landing.get_lead);
//connects to mongoose and uses promises
mongoose.connect("mongodb://localhost:27017/Learning-Node")
.then(() => {
db = mongoose.connection;
console.log("Connection successful.")
})

.catch(() => alert("Connection to Database failed. Please try again later."));

//checks if db exists, if it does it adds the email to the db
if (db) {
db.add(email);
}
