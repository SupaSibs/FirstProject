//mongoose db, express.js, landing and router settings
require("dotenv").config()
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//connects to mongo
mongoose.connect(process.env.MONGO_URI)
//schema for email, password, and username.
exports.sendData = (user, email, pass) => {
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
let detailsModel = mongoose.model("Details", schema);
let details = detailsModel({Username:user, Email:email, Password:pass});
details.save()
details = undefined;
}
