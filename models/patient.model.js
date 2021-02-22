const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;