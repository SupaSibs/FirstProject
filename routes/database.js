//mongoose db, express.js, landing and router settings
let express = require("express"),
 router = express.Router(),
  mongoose = require("mongoose"),
   landing = require("../controllers/landing");
//gets lead email to add to the database
router.get("/", landing.get_lead);
//connects to mongoose and uses promises
mongoose.connect("mongodb://localhost:27017/Learning-Node")
.catch(() => console.log("Connection to Database failed. Please try again later."));
let db = mongoose.connection;
//schema
exports.saveToDb = (email) => {
let emailSchema =  new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        collection: "Emails_Collection"
    }
    })
    landing.email = mongoose.Schema("Email_Collection", emailSchema)
landing.email.save(() => {});
}
