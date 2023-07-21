const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
  },

  gender: {
    type: String,
  },

  location: {
    
      type: String,
      // enum: ['Point'],
      // default: "Point",
      // index: "2dsphere"
    },
    

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phoneNumber: {
    type: Number
  },

  profilePicture: {
    type: String
  },

  licenseNumber: {
    type: String,
  },

  licenseImage: {
    type: String
    
  },

  doctorDescription: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  expoToken: {
    type: String
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
    ref: "Specialization",
  },

  languages: {
    type: [{ type: String }],
  },

  certifications: {
    type: [{ type: String }],
  },

  experience: {
    type: Number,
  },

  roles: {
    type: [String],
    required: true,
  },

  rating: {
    type: Number
  }
});

// doctorSchema.index({
//   location: "2dsphere"
// })

exports.Doctor = mongoose.model("Doctor", doctorSchema);
