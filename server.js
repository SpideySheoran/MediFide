require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const passport = require("passport")

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

const PORT = process.env.PORT || 5000
const DATABASE_CONNECTION = process.env.MONGODB_URI

mongoose.connect(DATABASE_CONNECTION, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once("open", () => {
	console.log("MongoDB databse connection established successfully")
})

const Patient = require("./models/Patient")

app.use(passport.initialize())
app.use(passport.session())
require("./config/passport.js")

app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "patient.js"))
})

app.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
)

app.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000",
		failureRedirect: "/failed",
	}),
	(req, res) => {
		console.log(req.user)
		try {
			Patient.find({ email: req.user.email }, (err, doc) => {
				if (doc.length === 0) {
					Patient.create({ name: req.user.name, email: req.user.email })
				}
			})
		} catch (e) {
			console.log(e)
		}

		res.redirect("/")
	}
)
app.get("/login/success", (req, res) => {
	//console.log("hi", req.user)
	if (req.user) {
		res.json({
			success: true,
			message: "user has successfully authenticated",
			user: req.user,
			cookies: req.cookies,
		})
	}
})

app.get("/register", (req, res) => {
	const body = req.body
})

const usersRouter = require("./routes/Patients")
const doctorsRouter = require("./routes/Doctors")
app.use("/users", usersRouter)
app.use("/doctors", doctorsRouter)

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
