const { Patient } = require("../models/patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Address } = require("../models/address");

const registerPatient = async (req, res) => {
  try {
    let newPassword = await bcrypt.hash(req.body.password, 10);
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      process.env.JWT_SECRET
    );

    const savedAddress = await Address.create({
      houseNumber: req.body.houseNumber,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country,
    });


    await Patient.create({
      name: req.body.name,
      password: newPassword,
      email: req.body.email,
      profilePicture: req.body.profilePicture,
      healthNumber: req.body.healthNumber,
      healthDocument: req.body.healthDocument,
      dob: req.body.dob,
      gender: req.body.gender,
      address: savedAddress._id,
    });

    return res.status(200).json({
      message: "Patient Registered Succesfully",
      data: {
        token,
        email: req.body.email,
        name: req.body.name,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Login of Patient
const loginPatient = async (req, res) => {
  const email = req.body.email;
  let patient = await Patient.findOne({ email: email });
  if (patient) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      patient.password
    );
    if (isValidPassword) {
      const token = jwt.sign(
        {
          name: req.body.name,
          email: req.body.email,
        },
        process.env.JWT_SECRET
      );
      return res.status(200).json({
        token,
        id: patient._id,
        name: patient.name,
        email: patient.email,
        message: "Succesfully Logged In",
      });
    } else {
      return res.status(401).json({
        message: "Incorrect Password!",
      });
    }
  } else {
    return res.status(500).json({
      message: "User doesn't exist, please register",
    });
  }
};

// Get all Patients
const getPatients = (req, res) => {
  Patient.find()
    .populate({
      path: "address",
    })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully got Patients",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

// Update data of Patient by id
const updatePatient = (req, res) => {
  const id = req.params.id;

  Patient.findOneAndUpdate({ _id: id }, req.body, {
    returnOriginal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Succesfully updated the Patient",
      data: result,
    });
  });
};

// Delete a Patient by id
const deletePatient = (req, res) => {
  const id = req.params.id;
  Patient.findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({
        message: "Patient succesfully delete"
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

// Get Patient data by id
const getPatientById = (req, res) => {
  const id = req.params.id;

  Patient.findById(id)
    .then((result) => {
      return res.status(200).json({
        message: `Patient found succesfully`,
        data: result,
      });
    })
    .catch((error) => {
      return res.status(404).json({
        message: error.message,
      });
    });
};

module.exports = {
  registerPatient,
  loginPatient,
  getPatients,
  updatePatient,
  deletePatient,
  getPatientById,
};
