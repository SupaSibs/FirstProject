let express = require('express'),
router = express.Router(),
landing = require("../controllers/landing"),
login = require("../controllers/login"),
app = require("../app")
// GET pages
router.get('/', landing.get_landing);
router.get('/login', login.get_login);
//POSTs
router.post('/', landing.submit_lead);
router.post('/login', login.submit_login);
module.exports = router;
