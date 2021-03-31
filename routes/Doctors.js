const router = require("express").Router()
let Patient = require("../models/Patient")
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

router.route("/appointment/:id").post(async (req, res) => {

	const date = req.body.appointments.date
	const slot = req.body.appointments.slots.slot
	const docName = req.body.docName
	const email = req.body.email

	await User.findOneAndUpdate({ _id: req.params.id, "appointments.date": { $nin: [date] } }, {
		$push: {
			"appointments":
			{
				"date": date,
			}
		}
	});

	User.findOneAndUpdate({ _id: req.params.id, "appointments.date": date, "appointments.slots.slot": { $nin: [slot] } }, {
		$push: { "appointments.$.slots": { "slot": slot } }
	}, async (err, doc) => {
		if (err) {
			return res.json({ err });
		}
		if (doc === undefined) {
			return res.json({ msg: "slots full" });
		}
		else {
			await Patient.findOneAndUpdate({ email: email }, { appointment: { doctor: docName, time: slot, date: date } });
			return res.json({ msg: "succesfull" });
		}
	});


	// const query = {_id : req.params.id, "appointments.date": date, "appointments.slots.slot": {$nin: [slot]}};
    // const updateDocument = {
    //   $push: { "appointments.$.slots":{"slot": slot }}
	// }
    // const result = User.updateOne(query, updateDocument, (err, doc) => {
	// 	if(err){
	// 		res.send({status:false, message:"Error: not updated", err});
	// 	}
	// 	else {
	// 		res.send({status:true, message:"Success: Updated1"});	
	// 	}
	// });
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
