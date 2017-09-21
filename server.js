let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();


app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

let port = 3001 || process.env.PORT;
app.listen(port, (err) => {
    if(err) throw new Error("Something went wrong!!!");
    console.log("http://localhost:" + port + "/");
})