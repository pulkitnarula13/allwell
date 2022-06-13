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
    unique: true,
  },

  profilePicture: {
    type: String,
  },

  licenceNumber: {
    type: String,
    unique: true,
    required: true,
  },

  licenceImage: {
    type: String,
  },

  doctorDescription: {
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
});

exports.Doctor = mongoose.model("Doctor", doctorSchema);
