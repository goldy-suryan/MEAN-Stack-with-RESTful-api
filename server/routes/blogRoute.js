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

blogRoute.delete("/:id", (req, res) => {
    blogs.findByIdAndRemove(req.params.id, (err, deletedBlog) => {
        res.json("deleted");
    })
});

blogRoute.post("/", (req, res) => {
    let newBlog = new blogs();
    newBlog.title = req.body.title;
    newBlog.description = req.body.description;

    newBlog.save((err) => {
        if(err) { res.json({ success: false, message: "Something went wrong while posting the blog"})}
        res.json({ success: true, message: "Blog posted successfully"})
    });
});



module.exports = blogRoute;