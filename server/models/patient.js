const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  healthNumber: {
    type: Number,
    required: true,
  },
  healthDocument: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
});

const Patient = mongoose.model("Patient", PatientSchema);

exports.Patient = Patient;
