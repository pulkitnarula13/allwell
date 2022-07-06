const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symptomsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },
});

exports.Symptom = mongoose.model("Symptom", symptomsSchema);
