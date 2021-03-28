const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
    }
  },
  {
    timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
  },
  {
    appointments: [
      {
        date: Date,
        slot: Number,
      },
    ]
  }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;





  const name = req.body.personal.name
  const gender = req.body.personal.gender
  const email = req.body.personal.email
  const dob = Date.parse(req.body.personal.dob)
  const phone = req.body.personal.phone
  const address = req.body.personal.address
  const photo = req.body.personal.photo

  const newUser = new User({
    name,
    gender,
    email,
    dob,
    phone,
    address,
    photo,
  });

  newUser
    .save()
    .then(() => res.json("Doctor added!"))
    .catch((err) => res.status(400).json("Error: " + err))