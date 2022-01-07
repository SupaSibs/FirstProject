exports.get_landing =(req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
req.setHeader("Content-Type", "application/json")
res.setHeader("Content-Type", "application/json")
let email = req.body.lead_email;
console.log("lead email:", email);
return email;
}



