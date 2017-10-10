let express = require("express");
let route = express.Router();
let passport = require("passport");
const User = require("../model/usermodel").userModel;
let bcrypt = require("bcrypt");
let saltRounds = 10;

route.post("/signup", (req, res, next) => {
    User.findOne({ $or: [{ username: req.body.username}, { email: req.body.email }] }, (err, user) => {

        if(err) {
            return res.json(err);
        }

        if (user) { 
            return res.json({ success: false, message: "user already exists" }) }

        if (!user) {
            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                var newUser = new User();
                newUser.username = req.body.username;
                newUser.email = req.body.email;
                newUser.password = hash;

                newUser.save((err) => {
                    if (err) { return next(err) }
                    res.json({ success: true, message: "user saved successfully" });
                });
            });
        }
    });
})

route.post("/login", (req, res, next) => {

    passport.authenticate("local.login", (err, user, info) => {
        if (err) { return next(err) }

        if (!user) { return res.json({ success: false, message: "Username or Password doesn't match" }) }

        res.json({ success: true, message: "logged in Successfully", data: user });
    })(req, res, next);
});

module.exports = route;