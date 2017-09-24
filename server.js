let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let passport = require("passport");
let flash = require("connect-flash");
let signUpRoute = require("./server/routes/signupRoute");
let app = express();


app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./server/routes/api");

app.use("/api", signUpRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

let port = 3001 || process.env.PORT;
app.listen(port, (err) => {
    if(err) throw new Error("Something went wrong!!!");
    console.log("http://localhost:" + port + "/");
})