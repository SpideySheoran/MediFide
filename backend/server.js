require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session");
const device = require('express-device');
const bodyParser = require('body-parser')

const app = express();

app.use(device.capture());
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DATABASE_CONNECTION = process.env.MONGODB_URI;

mongoose.connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB databse connection established successfully");
});

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ["somesecretsauce"],
    })
);

app.use(passport.initialize());
app.use(passport.session());
require("../config/passport.js");
require("../routes/Auth.js")(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../src/app.js"));
});

const usersRouter = require("../routes/Patients");
const doctorsRouter = require("../routes/Doctors");
app.use("/users", usersRouter);
app.use("/doctors", doctorsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
