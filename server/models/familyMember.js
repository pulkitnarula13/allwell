const mongoose = require("mongoose");

const FamilyMemberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  dob: {
    type: Date,
  },

  healthNumber: {
    type: Number,
  },

  relationship: {
    type: String,
  },

  profilePicture: {
    type: String,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  }

});

const FamilyMember = mongoose.model("FamilyMember", FamilyMemberSchema);

exports.FamilyMember = FamilyMember;
