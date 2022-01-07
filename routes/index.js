var express = require('express');
var router = express.Router();
let landing = require("../controllers/landing"),
dbhandler = require("../routes/database.js")
// GET home page
router.get('/', landing.get_landing);
//Posts the submit_lead and get_lead.
router.post('/', landing.submit_lead);
module.exports = router;