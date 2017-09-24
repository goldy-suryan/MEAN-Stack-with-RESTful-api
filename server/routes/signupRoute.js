let express = require("express");
let signUpRoute = express.Router();
let passport = require("passport");
let bcrypt = require("bcrypt");
let saltRounds = 10;
const User = require("../model/usermodel");


signUpRoute.post("/signup", passport.authenticate("local.signup"), (req, res) => {
    res.json({ success: true, message: "user saved" })
});

module.exports = signUpRoute;