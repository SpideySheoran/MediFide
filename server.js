require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session");

const app = express();

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

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Patient = require("./models/Patient");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            Patient.findOne({ email: profile.emails[0].value }).then(
                (existingUser) => {
                    if (existingUser) {
                        console.log("existing");
                        done(null, existingUser);
                    } else {
                        // console.log(req)

                        //utils.record_activity(profile.emails[0].value, "user_add", "desktop");
                        new Patient({
                            googleId: profile.id,
                            name: profile.displayName,
                            email: profile.emails[0].value,
                        })
                            .save()
                            .then((user) => done(null, user));
                    }
                }
            );
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (id, done) {
    Patient.findById(id).then((user) => {
        done(null, user);
    });
});

//const Patient = require("./models/Patient")

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ["somesecretsauce"],
    })
);

app.use(passport.initialize());
app.use(passport.session());



app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "patient.js"));
});

app.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/google/callback", passport.authenticate("google"), (req, res) => {
    //console.log("hi");
    if (req.isAuthenticated()) {
        console.log("yes");
    }
    res.redirect("http://localhost:3000");
});
app.get("/api/current_user", async (req, res) => {
    if (req.isAuthenticated()) {
        // utils.record_activity(req, "current_user");
        res.send({ user: req.user, loggedIn: true });
    } else if (process.env.NODE_ENV === "test") {
        const testUser = await User.findById(process.env.TEST_USER);
        // console.log(testUser)
        res.send({ user: testUser, loggedIn: true });
    } else {
        res.send({ user: { Roles: "Unauthorized" }, loggedIn: false });
    }
});

app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000");
});

app.get("/register", (req, res) => {
    const body = req.body;
});

const usersRouter = require("./routes/Patients");
const doctorsRouter = require("./routes/Doctors");
app.use("/users", usersRouter);
app.use("/doctors", doctorsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
