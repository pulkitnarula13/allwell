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
});

exports.QNA = mongoose.model("QNA", QNASchema);
