const dbHandler = require("../routes/database");
const express = require("express")
let router = express.Router;
exports.get_landing = (req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
console.log(req)
let username = req.body.username.value,
pass = req.body.password.value,
email = req.body.email.value;
console.log("lead email:", email);
console.log("lead name:", username);
console.log("lead pass:", pass);
dbHandler.submitData(username, email, pass);
router.redirect("/")
}



