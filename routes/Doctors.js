const router = require("express").Router();
let Patient = require("../models/Patient");
let User = require("../models/Doctor");

router.route("/").get((req, res) => {
  User.find()
    .then((Doctors) => res.json(Doctors))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id).exec((err, Doctors) => {
    res.json(Doctors);
  });
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const email = req.body.email;
  const dob = req.body.dob;
  const phone = req.body.phone;
  const photo = req.body.photo;
  const qualification = req.body.qualification;
  const college = req.body.college;

  const newUser = new User({
    personal: {
      name: name,
      gender: gender,
      email: email,
      dob: dob,
      phone: phone,
      photo: photo,
      qualification: qualification,
      college: college,
    },
  });

  newUser
    .save()
    .then(() => res.json("Doctor added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/remove/:id").post(async (req, res) => {
  User.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return res.json(err);
    else {
      return res.json({ msg: "success" });
    }
  });
});

router.route("/getByDate/:email/:date").get(async (req, res) => {
  const doctor = await User.findOne({ "personal.email": req.params.email });
  console.log(doctor);
  doctor.appointments.forEach((appointment) => {
    if (appointment.date === req.params.date) {
      return res.json(appointment.slots);
    }
    
  })
  return res.json({ "msg": "Totally free" });
})

router.route("/appointmentCheck/:id").post(async (req, res) => {
  const date = req.body.appointments.date;
  //   const user = await User.findById(req.params.id);
  //   console.log(user);
  //   res.json(user);

  await User.findOneAndUpdate(
    { _id: req.params.id, "appointments.date": { $nin: [date] } },
    {
      $push: {
        appointments: {
          date: date,
        },
      },
    }
  );
  let slots = [
    "10-11am",
    "11-12pm",
    "12-1pm",
    "1-2pm",
    "2-3pm",
    "3-4pm",
    "4-5pm",
    "5-6pm",
    "6-7pm",
    "7-8pm",
    "8-9pm",
    "9-10pm",
  ];

  const user = await User.findOne({
    _id: req.params.id,
    "appointments.date": date,
  });

  user.appointments.forEach((appointment) => {
    //console.log(appointment);
    if (appointment.date === date) {
      console.log(appointment);
      appointment.slots.forEach((slot) => {
        slots = slots.filter((slot1) => slot1 !== slot.slot);
      });
      console.log(slots);
      return res.json(slots);
    }
  });
});

router.route("/appointment/:id").post(async (req, res) => {
  const date = req.body.appointments.date;
  const slot = req.body.appointments.slots.slot;
  const docName = req.body.docName;
  const email = req.body.email;

  await User.findOneAndUpdate(
    { _id: req.params.id, "appointments.date": { $nin: [date] } },
    {
      $push: {
        appointments: {
          date: date,
        },
      },
    }
  );
    
    const patient = await Patient.findOne({email:email});
      

  User.findOneAndUpdate(
    {
      _id: req.params.id,
      "appointments.date": date,
      "appointments.slots.slot": { $nin: [slot] },
    },
    {
      $push: { "appointments.$.slots": { slot: slot, name:patient.name } },
    },
    async (err, doc) => {
      console.log(doc);
      if (err) {
        return res.json({ err });
      }
      if (doc === undefined) {
        return res.json({ msg: "slots full" });
      } else {
        await Patient.findOneAndUpdate(
          { email: email },
          { appointment: { doctor: docName, time: slot, date: date } }
        );
        return res.json({ msg: "succesfull" });
      }
    }
  );
});

router.route("/appointment/:id/date").post((req, res) => {
  const date = req.body.appointments.date;
  const slot = req.body.appointments.slots.slot;

  const query = { _id: req.params.id, "appointments.date": { $nin: [date] } };
  const updateDocument = {
    $push: {
      appointments: {
        date: date,
        slots: { slot: slot },
      },
    },
  };
  const result = User.updateOne(query, updateDocument, (err, doc) => {
    if (err) {
      res.send({ status: false, message: "Error: not updated", err });
    } else {
      res.send({ status: true, message: "Success: Updated2" });
    }
  });
});

module.exports = router;
