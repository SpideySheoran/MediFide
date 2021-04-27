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
router.route("/:emailid").get((req, res) => {
  User.findOne({ email: req.params.emailid }, (err, doc) => {
    return res.json(doc.history);
  });
});

router.route("/:id").get((req, res) => {
  User.findOne({ _id: req.params.id }, (err, doc) => {
    return res.json(doc);
  });
});

router.route("/cancel/:emailid").post((req, res) => {
  Doctor.findOneAndUpdate(
    { "personal.name": req.body.doctor, "appointments.date": req.body.date },
    { $pull: { "appointments.$.slots": { slot: req.body.time } } }, (err,doc)=>{
      console.log(err, doc);
    }
  );
  User.findOneAndUpdate(
    { email: req.params.emailid },
    { appointment: {} },
    (err, doc) => {
      return res.json(doc);
    }
  );
});

router.route("/prescription/:id").post(async (req, res) => {
  const date = req.body.date;
  const pAilment = req.body.pAilment;
  const sAilment = req.body.sAilment;
  const medicine1 = req.body.medicine1;
  const medicine2 = req.body.medicine2;
  const medicine3 = req.body.medicine3;
  const medicine4 = req.body.medicine4;
  const medicine5 = req.body.medicine5;

  User.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      $push: { "history": { date: date, pAilment: pAilment, sAilment: sAilment, medicine1:medicine1, medicine2:medicine2, medicine3:medicine3, medicine4:medicine4, medicine5:medicine5 } },
    },
    async (err, doc) => {
      console.log(doc);
      if (err) {
        return res.json({ err });
      }
    }
  );
  Doctor.findOneAndUpdate(
    { "personal.name": req.body.doctor, "appointments.date": req.body.date },
    { $pull: { "appointments.$.slots": { slot: req.body.time } } }, (err,doc)=>{
      console.log(err, doc);
    }
  );
  User.findOneAndUpdate(
    { _id: req.params.id },
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
