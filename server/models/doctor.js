const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },

  gender: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phoneNumber: {
    type: Number,
  },

  profilePicture: {
    type: String,
  },

  licenseNumber: {
    type: String,
    unique: true
  },

  licenseImage: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  workingDays: {
    type: [{ type: String }],
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },

  specialities: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: "Specialization"
  },
  
  languages: {
    type: [{ type: String }]
  },

  certifications: {
    type: [{ type: String }]
  },
  
  experience: {
    type: Number
  },

  roles: {
    type: [String],
    reuqired: true,
  },


});

exports.Doctor = mongoose.model("Doctor", doctorSchema);
