//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//connects to mongoose
let db = mongoose.connect("mongodb://localhost:27017/Learning-Node").connection
//schema for email, password, and username.
let schema = new mongoose.Schema({
Username: {
	required:true,
	type:String,
	unique: true
},
Email: {
        required:true,
        type:String,
	unique: true
},
Password: {
        required:true,
        type:String,
	unique: false
}})
let mailModel = mongoose.model("Details", schema)
let controlledDetails = landing.submit_lead();
let detailsSent = new mailModel(controlledDetails[0], controlledDetails[1], controlledDetails[2]);
detailsSent.save(function(){});

