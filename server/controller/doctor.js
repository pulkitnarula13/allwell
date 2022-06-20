const { Doctor } = require("../models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Address } = require("../models/address");

/**
 * @description API to register doctors to database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const registerDoctor = async (req, res) => {
  try {
    let newPassword = await bcrypt.hash(req.body.password, 10);
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      process.env.JWT_SECRET
    );

    const uploadProfilePicture = await upload(
      `${Date.now() + "" + req.body.profilePicture}`,
      req.body.image,
      "jpg",
      "doctor",
      req.body.name
    );

    const uploadLicenseImage = await upload(
      `${Date.now() + "" + req.body.healthDocument}`,
      req.body.image,
      "jpg",
      "patient",
      req.body.name
    );

    const savedAddress = await Address.create({
      houseNumber: req.body.houseNumber,
      city: req.body.city,
      province: req.body.province,
      postalCode: req.body.postalCode,
      country: req.body.country,
    });

    const output = await Doctor.create({
      name: req.body.name,
      dob: req.body.dob,
      password: newPassword,
      gender: req.body.gender,
      email: req.body.email,
      city: req.body.city,
      zipCode: req.body.zipCode,
      province: req.body.province,
      phoneNumber: req.body.phoneNumber,
      profilePitcture: uploadProfilePicture,
      licenseNumber: req.body.licenseNumber,
      doctorDescription: req.body.doctorDescription,
      workingDays: req.body.workingDays,
      specialities: req.body.specialities,
      languages: req.body.languages,
      certifications: req.body.certifications,
      address: savedAddress._id,
      licenceImage: uploadLicenseImage,
    });

    return res.status(200).json({
      message: "Doctor Registered Succesfully",
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

/**
 * @description API to login Doctors
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const loginDoctor = async (req, res) => {
  const email = req.body.email;
  let doctor = await Doctor.findOne({ email: email });
  if (doctor) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      customer.password
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
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        message: "Succesfully Logged In",
      });
    } else {
      return res.status(401).json({
        message: "Incorrect Password",
      });
    }
  } else {
    return res.status(400).json({
      message: "User doesn't exist, please register",
    });
  }
};

/**
 * @description API to fetch all doctors from database
 * @param {*} req
 * @param {*} res
 */
const getDoctors = (req, res) => {
  Doctor.find()
    .populate({
      path: "address",
    })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched all doctors",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

/**
 * @description API to updte doctors
 * @param {*} req
 * @param {*} res
 */
const updateDoctor = (req, res) => {
  const id = req.params.id;

  Doctor.findOneAndUpdate({ _id: id }, req.body, {
    returnOrignal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Succesfully updated the Doctor",
      data: result,
    });
  });
};

/**
 * @description API to delete doctor
 * @param {*} req
 * @param {*} res
 */
const deleteDoctor = (req, res) => {
  const id = req.params.id;
  Doctor.findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({
        message: "Doctor succesfully deleted",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

/**
 * @description Api to fetch doctor based on given ID
 * @param {*} req
 * @param {*} res
 */
const getDoctorById = (req, res) => {
  const id = req.params.id;

  Doctor.findById(id)
    .then((result) => {
      return res.status(200).json({
        message: `Doctor found succesfully`,
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
  getDoctors,
  deleteDoctor,
  updateDoctor,
  getDoctorById,
  registerDoctor,
  loginDoctor,
};
