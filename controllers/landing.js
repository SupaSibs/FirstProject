const dbHandler = require("../routes/signup");
const express = require("express")
let router = express.Router();
exports.get_landing = (req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
let username = req.body.username,
pass = req.body.password,
email = req.body.email;
dbHandler.sendData(username, email, pass)
res.redirect("/")
}



