let express = require("express");
let blogs = require("../model/usermodel").blogModel;
let blogRoute = express.Router();

blogRoute.get("/", (req, res) => {
    blogs.find({}, (err, blogs) => {
        res.send(blogs);
    })
});

blogRoute.get("/:id", (req, res) => {
    blogs.findById(req.params.id, (err, blog) => {
        if(err) res.json({ success: false, message: err });
        res.json(blog);
    });
});

module.exports = blogRoute;