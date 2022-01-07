exports.get_landing =(req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
let email = req.body.lead_email;
console.log("lead email:", email)
res.redirect('/')
}

exports.get_lead = (req, res, next) => {
let email = req.body.lead_email;
module.exports = email;
}


