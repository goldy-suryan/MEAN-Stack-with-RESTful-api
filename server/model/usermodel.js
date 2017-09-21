let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/mean-app", {
    useMongoClient: true
});

let userSchema = mongoose.Schema({

});

module.exports = mongoose.model("Users", userSchema);