const passport = require("passport");
const express = require("express");
const app = express();
const Patient = require("../models/Patient");

module.exports = app => {
    app.get(
        "/google",
        passport.authenticate("google", { scope: ["profile", "email"] })
    );

    app.get("/google/callback", passport.authenticate("google"), (req, res) => {
        //console.log("hi");
        if (req.isAuthenticated()) {
            console.log("yes");
        }
        res.redirect("/");
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
        res.redirect("/");
    });
}