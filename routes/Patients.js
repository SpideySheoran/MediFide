const router = require("express").Router();
let User = require("../models/Patient");
const Doctor = require("../models/Doctor");

router.route("/").get((req, res) => {
  User.find()
    .then((Patients) => res.json(Patients))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update").post((req, res) => {
  console.log("hi", req.body);
  User.findOneAndUpdate({ email: req.body.email }, req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else console.log(data);

    return res.json(data);
  });
});

router.route("/patient/:emailid").get((req, res) => {
  User.findOne({ email: req.params.emailid }, (err, doc) => {
    return res.json(doc);
  });
});

router.route("/cancel/:emailid").post((req, res) => {
  Doctor.findOneAndUpdate(
    { "personal.name": req.body.doctor, "appointments.date": req.body.date },
    { $pull: { "appointments.$.slots": { slot: req.body.time } } }
  );
  User.findOneAndUpdate(
    { email: req.params.emailid },
    { appointment: {} },
    (err, doc) => {
      return res.json(doc);
    }
  );
});

router.route("/book").post((req, res) => {
  User.findOneAndUpdate({ email: req.body.email }, req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else console.log(data);

    return res.json(data);
  });
});

module.exports = router;
