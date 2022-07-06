const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorReviewSchema = new Schema({

  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },

  rating: {
    type: Number,
    required: true,
  },

  feedback: {
    type: String,
  },

  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },

}, {
  timestamps: true
});

exports.DoctorReview = mongoose.model("DoctorReview", doctorReviewSchema);
