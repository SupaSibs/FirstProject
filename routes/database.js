//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//connects to mongoose
let db = mongoose.connect("mongodb+srv://SupaSibs:abc@learning-node.xhgyd.mongodb.net/Learning-Node?retryWrites=true&w=majority")
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
