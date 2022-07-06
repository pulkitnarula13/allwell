const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QNASchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },

  images: {
    type: [String],
  },

  // doctor: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Doctor",
  //   required: true,
  // },

  // patient: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Patient",
  //   required: true,
  // },
});

exports.QNA = mongoose.model("QNA", QNASchema);
