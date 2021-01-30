const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const routes = require("./routes/admin");

app.use(cookieParser());
app.use(
    session({
        cookie: {
            path: "/",
            httpOnly: true,
            maxAge: 1000 * 60 * 60, // 1 hour for cookie
            sameSite: true,
            secure: false,
        },
        secret: "This is my secret infomation",
        name: "sid",
    })
);

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
app.post("/", (req, res) => {
    console.log(req.body);
    if (req.body.password === req.body.confirmPassword) {
        console.log("successfull");
    }
});

mongoose
    .connect(
        "mongodb+srv://Sampong:Samponglim3788@cluster0.8rggm.mongodb.net/authentications?retryWrites=true&w=majority"
    )
    .then((result) => {
        console.log(result);
        console.log("Database is connected.");
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
