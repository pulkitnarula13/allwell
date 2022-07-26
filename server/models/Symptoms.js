const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symptomsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});

exports.Symptom = mongoose.model("Symptom", symptomsSchema);
