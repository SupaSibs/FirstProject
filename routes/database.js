//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//connects to mongoose
let db = mongoose.connect("mongodb+srv://SupaSibs:rami.com@learning-node.xhgyd.mongodb.net/Learning-Node?retryWrites=true&w=majority").connection
//schema for email, password, and username.
router.post('/', sendData);
function sendData(username, email, password) {
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

let detailsSent = new Promise((success, fail) => {
globalThis.details = detailsModel(username, email, password);
})	
detailsSent.then(console.log("Success"))
detailsSent.catch(console.error("Failed"));

details.save(function(){})
}
