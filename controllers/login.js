//Dbhandler
const dbHandler = require("../routes/login"),
app = require("../app")
//Renders page
exports.get_login = (res, req, next) => {
res.render('login', { name:"My First Backend App | Login" } ) }

exports.submit_login = (res, req, next) => {
let name = req.body.name,
pass = req.body.pass,
getLogin = dbHandler.validateLogin(name, pass);
}

