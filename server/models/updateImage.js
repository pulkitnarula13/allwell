const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },



  profilePicture: {
    type: String
  },

 
});

exports.DoctorImage = mongoose.model("DoctorImage", doctorSchema);
