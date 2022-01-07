var express = require('express');
var router = express.Router();
let landing = require("../controllers/landing")
// GET home page.
router.get('/', landing.get_landing);
//Posts the submit_lead and get_lead.
router.post('/', landing.submit_lead);
router.post('/', landing.get_lead);

module.exports = router;