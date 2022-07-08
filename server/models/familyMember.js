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

  gender: {
    type: String,
  },

  relationship: {
    type: String,
  },
  
  creatorPatient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },

  roles: {
    type: [String],
    required: true,
  },

  profilePicture: {
    type: String,
  },

});

const FamilyMember = mongoose.model("FamilyMember", FamilyMemberSchema);

exports.FamilyMember = FamilyMember;
