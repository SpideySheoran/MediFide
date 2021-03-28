const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PatientSchema = new Schema(
	{
		name: {
			type: String,
		},
		height: {
			type: String,
		},
		weight: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		number: {
			type: String,
		},
		anumber: {
			type: String,
		},
		address1: {
			type: String,
		},
		address2: {
			type: String,
		},
		photo: {
			type: String,
		},
		appointment: {
			drName: {
				type: String,
			},
			slot: {
				type: String,
			},
			date: {
				type: String,
			}
		}
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