let express = require("express");
let route = express.Router();
let passport = require("passport");
let bcrypt = require("bcrypt");
let saltRounds = 10;
const User = require("../model/usermodel");


route.post("/signup", passport.authenticate("local.signup"), (req, res) => {
    res.json({ success: true, message: "user saved" });
});

route.post("/login", passport.authenticate("local.login"), (req, res) => {
    let data = {
        username : req.user.username,
        email: req.user.email,
        id: req.user._id
    }
    res.json({ success: true, message: "logged in Successfully", data: data });
})

module.exports = route;