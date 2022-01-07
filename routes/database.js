//mongoose db, express.js, landing and router settings
let express = require("express")
let router = express.Router();
let mongoose = require("mongoose");
let landing = require("../controllers/landing")
//gets lead email to add to the database
router.get("/", landing.get_lead);
//connects to mongoose and uses promises
mongoose.connect("mongodb://localhost:27017/Learning-Node")
.catch(() => alert("Connection to Database failed. Please try again later."));
let db = mongoose.connection;
//checks if db exists, if it does it adds the email to the db
if (db) {
landing.email.save();
}
