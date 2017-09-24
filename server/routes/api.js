let express = require("express");
let passport = require("passport");
let Strategy = require("passport-local").Strategy;
let mongoose = require("mongoose");
const User = require("../model/usermodel");
let bcrypt = require("bcrypt");
let saltRounds = 10;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


passport.use("local.signup", new Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, (req, username, password, done) => {
    User.findOne({username: username}, (err, user) => {
        if(err) {
            if(err.code === 11000) {
                return done(err);
            }
            return done(err);
        }

        if(user) { return done(null, false) }

        if(!user) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                var newUser = new User();
                newUser.username = req.body.username;
                newUser.email = req.body.email;
                newUser.password = hash;

                newUser.save((err) => {
                    if(err) { return done(err) }
                    done(null, newUser);
                });
            });
        }
    });
}));
