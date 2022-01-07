let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Learning-Node");
let db = mongoose.connection;