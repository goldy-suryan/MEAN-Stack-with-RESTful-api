let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/mean-app", {
    useMongoClient: true
});

let userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, unique: true }
}, { collection: "users"});

let blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: String },
    date: { type: Date, default: Date.now() }
}, { collection: "blogs"})

module.exports = {
    userModel : mongoose.model("Users", userSchema),
    blogModel : mongoose.model("blogs", blogSchema)
}