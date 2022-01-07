//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//gets lead email to add to the database
let email = landing.submit_email
//connects to mongoose and uses promises
let db = mongoose.connect("mongodb://localhost:27017/Learning-Node").connect

landing.email.save(() => {});
