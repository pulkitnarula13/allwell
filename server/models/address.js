const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  houseNumber: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  postalCode: {
    type: String,
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
