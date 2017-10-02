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

blogRoute.put("/:id", (req, res) => {
    blogs.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title, description: req.body.description }}, { upsert: true }, (err, blog) => { 
        if(err) res.json({ success: false, message: "Something wrong happened while updating the post"})
            res.json(blog)
    });
});

module.exports = blogRoute;