let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let passport = require("passport");
let session = require("express-session");
let cookieParser = require("cookie-parser");
let connectMongo = require("connect-mongo")(session);
let mongoose = require("mongoose");
let morgan = require("morgan");
let authRoutes = require("./server/routes/authRoute");
let blogRoute = require("./server/routes/blogRoute");
let app = express();


app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new connectMongo({
        mongooseConnection: mongoose.connection
    })
}))
app.use(morgan("dev"))

app.use(passport.initialize());
app.use(passport.session());

require("./server/routes/auth");

app.use("/auth", authRoutes);

app.use("/allblogs", blogRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

let port = 3001 || process.env.PORT;
app.listen(port, (err) => {
    if(err) throw new Error("Something went wrong!!!");
    console.log("http://localhost:" + port + "/");
})