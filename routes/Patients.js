const router = require("express").Router()
let User = require("../models/Patient")
const axios = require('axios')

router.route("/").get((req, res) => {
	User.find()
		.then((Patients) => res.json(Patients))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/update").post((req, res) => {
	
})

module.exports = router
