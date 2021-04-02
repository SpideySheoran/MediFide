var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Patient = require("../models/Patient");
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (id, done) {
  Patient.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      Patient.findOne({ email: profile.emails[0].value }).then(
        (existingUser) => {
          if (existingUser) {
            console.log("existing");
            done(null, existingUser);
          } else {
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
