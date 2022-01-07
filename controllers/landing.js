

exports.get_landing =(req, res, next) => {
res.render('index', { title: 'My First Backend App' } ) }

exports.submit_lead = (req, res, next) => {
	console.log("lead email:", req.body.lead_email)
res.redirect('/')
}
