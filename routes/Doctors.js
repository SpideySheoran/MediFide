const router = require("express").Router()
let Patient = require("../models/Patient")
let User = require("../models/Doctor")

router.route("/").get((req, res) => {
	User.find()
		.then((Doctors) => res.json(Doctors))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req,res) => {
    User.findById(req.params.id).exec((err,Doctors)=>{
        res.json(Doctors)
    })
})


router.route("/add").post((req, res) => {
	const name = req.body.personal.name
	const gender = req.body.personal.gender
	const email = req.body.personal.email
	const dob = req.body.personal.dob
	const phone = req.body.personal.phone
	const address = req.body.personal.address
	const photo = req.body.personal.photo
	const qualification = req.body.personal.qualification
	const college = req.body.personal.college

	const newUser = new User({
		"personal": {
			"name": name,
			"gender":gender,
			"email":email,
			"dob":dob,
			"phone":phone,
			"address":address,
			"photo":photo,
			"qualification": qualification,
			"college": college
		}
	});

	newUser
		.save()
		.then(() => res.json("Doctor added!"))
		.catch((err) => res.status(400).json("Error: " + err))
})

router.route("/remove/:id").post(async (req, res) => {
	User.deleteOne({ _id: req.params.id }, function (err) {
		if (err)
			return res.json(err);
		else {
			return res.json({ msg: "success" });
		}
	})
});

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
