//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//gets lead email to add to the database
//connects to mongoose and uses promises
let db = mongoose.connect("mongodb://localhost:27017/Learning-Node").connection
//schema
let schema = new mongoose.Schema({
email: {
	required:true,
	type:String
}})
let mailModel = mongoose.model("Emails_Collection", schema)
let mailSend = new mailModel(landing.submit_lead())
email.save(function(){});
