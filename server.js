const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')

const PORT = process.env.PORT || 5000;
const DATABASE_CONNECTION = process.env.MONGODB_URI;

const app = express()

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
console.log(DATABASE_CONNECTION)
mongoose.connect(DATABASE_CONNECTION,{useNewUrlParser: true});

app.use(passport.initialize());
app.use(passport.session());
require("./passport-config.js");

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/failed'}), (req, res) =>{
    console.log(req.user)
    res.redirect('/home')
})

app.get('*', (req, res) =>{
    res.send('Hello New User')
})

app.get('/register', (req, res) =>{
    const body = req.body
})

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})