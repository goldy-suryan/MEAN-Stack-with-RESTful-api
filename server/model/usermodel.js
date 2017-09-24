let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/mean-app", {
    useMongoClient: true
});

let userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, unique: true }
});

module.exports = mongoose.model("Users", userSchema);