//mongoose db, express.js, landing and router settings 
require("dotenv").config()
let express = require("express"),
 router = express.Router(),
 mongoose = require("mongoose"),
landing = require("../controllers/landing"),
app = require("../app.js"),
randomOrg = require("random-org-api")
//connects to mongo
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection;
//queries
let query = new mongoose.Query();
//generates random token
require('crypto').randomBytes(48, function(err, buffer) {
let token = buffer.toString('hex');
});
//validates
exports.validateLogin = (name, password) => {
globalThis.requestedLogin = query.findOne( { $or:
	[
{ "Username": name },
{ "Email": name  }
	] },
{ "Password":password },
(err, result) => {
if (err) {
console.error(err)
return "Error"
} else
if (result) {
app.loginCookie(token, result) 
return true;
}
else {
return false
}});}
