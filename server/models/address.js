const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  houseNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  coordinates: {
    type: [Number]
  },
});

const Address = mongoose.model("Address", AddressSchema);

exports.Address = Address;
