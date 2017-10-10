let express = require("express");
let passport = require("passport");
let Strategy = require("passport-local").Strategy;
let mongoose = require("mongoose");
const User = require("../model/usermodel").userModel;
let bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use("local.login", new Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, (req, username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) { return done(err) }

        if (!user) { return done(null, false) }

        if (user) {
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    return done(null, user);
                }
                return done(null, false);
            });
        }
    });
}));
