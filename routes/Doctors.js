const router = require("express").Router()
let User = require("../models/Doctor")

router.route("/").get((req, res) => {
	User.find()
		.then((Doctors) => res.json(Doctors))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
	const username = req.body.username

	const newUser = new User({ username })

	newUser
		.save()
		.then(() => res.json("Doctor added!"))
		.catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router