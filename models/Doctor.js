const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
  {
    "personal": {
      "name": {
        type: String,
        required: true,
      },
      "gender": {
        type: String,
      },
      "email": {
        type: String,
        required: true,
        unique: true,
      },
      "dob": {
        type: String,
      },
      "phone": {
        type: String,
      },
      "address": {
        type: String,
      },
      "photo": {
        type: String,
      }
    },
    "appointments": [
      {
        "date": {
          type: String,
        },
        "slots": [
          {
            "slot": {
              type: String,
            }
          },
        ]
      },
    ]
  },
  {
    "timestamps": 
    {
		  "createdAt": "created_at",
		  "updatedAt": "updated_at",
	  },
  }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;