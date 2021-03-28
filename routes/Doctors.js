const router = require("express").Router()
const { count } = require("../models/Doctor")
let User = require("../models/Doctor")

router.route("/").get((req, res) => {
	User.find()
		.then((Doctors) => res.json(Doctors))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
	const name = req.body.personal.name
	const gender = req.body.personal.gender
	const email = req.body.personal.email
	const dob = req.body.personal.dob
	const phone = req.body.personal.phone
	const address = req.body.personal.address
	const photo = req.body.personal.photo
	const date = req.body.appointments.date
	const slot = Number(req.body.appointments.slot)

	const newUser = new User({
		"personal": {
			"name": name,
			"gender":gender,
			"email":email,
			"dob":dob,
			"phone":phone,
			"address":address,
			"photo":photo,
		}
	});

	newUser
		.save()
		.then(() => res.json("Doctor added!"))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/appointment/:id/slot").post((req, res) => {

	const date = req.body.appointments.date
	const slot = req.body.appointments.slots.slot
	
	const query = {_id : req.params.id, "appointments.date": date, "appointments.slots.slot": {$nin: [slot]}};
    const updateDocument = {
      $push: { "appointments.$.slots":{"slot": slot }}
	}
    const result = User.updateOne(query, updateDocument, (err, doc) => {
		if(err){
			res.send({status:false, message:"Error: not updated", err});
		}
		else {
			res.send({status:true, message:"Success: Updated1"});	
		}
	});
})

router.route("/appointment/:id/date").post((req, res) => {

	const date = req.body.appointments.date
	const slot = req.body.appointments.slots.slot
	
	const query = {_id : req.params.id, "appointments.date": {$nin: [date]}};
	const updateDocument = {
		$push: {"appointments":
			{
				"date": date,
				"slots": {"slot": slot}
		}}
	}
	const result = User.updateOne(query, updateDocument, (err, doc) => {
		if(err){
			res.send({status:false, message:"Error: not updated", err});
		}
		else {
			res.send({status:true, message:"Success: Updated2"});	
		}
	});
})

module.exports = router
