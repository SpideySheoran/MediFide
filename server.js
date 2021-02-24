const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')

require('dotenv').config();

const app = express()

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DATABASE_CONNECTION = process.env.MONGODB_URI;

mongoose.connect(DATABASE_CONNECTION,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB databse connection established successfully");
})

app.use(passport.initialize());
app.use(passport.session());
require("./passport-config.js");

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, 'patient.js'))
})

app.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/failed'}), (req, res) =>{
    console.log(req.user)
    res.redirect('/home')
})

app.get('/register', (req, res) =>{
    const body = req.body
})

const usersRouter = require('./routes/Patients');
const doctorsRouter = require('./routes/Doctors');
app.use('/users', usersRouter);
app.use('/doctors', doctorsRouter);

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})