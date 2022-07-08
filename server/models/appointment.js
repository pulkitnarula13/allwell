const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Appointment = new Schema(
  {
    date: {
      type: Date,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    completed: {
      type: Boolean,
    },

    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },

    confirmed: {
      type: Boolean,
    },

    symptoms: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Symptom",
    },

    qna: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "QNA",
    },

    cancelled: {
      type: Boolean
    },

    urgent: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

exports.Appointment = mongoose.model("Appointment", Appointment);
