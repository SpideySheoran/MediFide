const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PatientSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		photo: {
			type: String,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
)

const Patient = mongoose.model("Patient", PatientSchema)
module.exports = Patient
