exports.get_landing =(req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
let username = req.body.username;
let pass = req.body.password;
let email = req.body.password;
console.log("lead email:", email);
console.log("lead name:", username);
console.log("lead pass:", pass);
return [username, pass, email];
}



