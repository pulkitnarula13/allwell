const { Doctor } = require("../models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Address } = require("../models/address");
const { Specialization } = require("../models/specialization");
const upload = require("../utils/upload");
const ROLE = require("../config/roles");

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
        roles: [ROLE.DOCTOR],
      },
      process.env.JWT_SECRET
    );

    const uploadLicenseImage = await upload(
      `${Date.now() + "" + req.body.licenseNumber}`,
      req.body.licenseImage,
      "jpg",
      "doctor",
      req.body.name
    );

    const output = await Doctor.create({
      name: req.body.name,
      dob: req.body.dob,
      password: newPassword,
      gender: req.body.gender,
      email: req.body.email.toLowerCase(),
      city: req.body.city,
      zipCode: req.body.zipCode,
      province: req.body.province,
      phoneNumber: req.body.phoneNumber,
      licenseNumber: req.body.licenseNumber,
      doctorDescription: req.body.doctorDescription,
      workingDays: req.body.workingDays,
      specialities: req.body.specialities,
      languages: req.body.languages,
      certifications: req.body.certifications,
      licenseImage: uploadLicenseImage,
      location: {
        coordinates: [req.body.location.longitude, req.body.location.latitude],
      },
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
    console.log(error, "error");
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
  let doctor = await Doctor.findOne({ email: email.toLowerCase() });
  if (doctor) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      doctor.password
    );
    if (isValidPassword) {
      const token = jwt.sign(
        {
          name: req.body.name,
          email: req.body.email,
          roles: [ROLE.DOCTOR],
        },
        process.env.JWT_SECRET
      );
      return res.status(200).json({
        token,
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        roles: "doctor",
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
 * @description API to fetch all doctors based on location
 * @param {*} req
 * @param {*} res
 */
const getDoctorsByLocation = (req, res) => {
  const longitude = Number(req.query.longitude);
  const latitude = Number(req.query.latitude);

  const options = {
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 1000 * 1000,
      },
    },
  };
  Doctor.find(options)
    .populate({
      path: "specialities",
    })
    .populate({
      path: "rating",
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
 * @description API to update doctors
 * @param {*} req
 * @param {*} res
 */
const updateDoctor = (req, res) => {
  const id = req.params.id;

  // const savedAddress = await Address.create({
  //   houseNumber: req.body.houseNumber,
  //   city: req.body.city,
  //   province: req.body.province,
  //   postalCode: req.body.postalCode,
  //   country: req.body.country,
  // });

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
    .populate({
      path: "specialities",
    })
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

/**
 * @description API to fetch all specialities of doctor from DB
 * @param {*} req
 * @param {*} res
 */
const getDoctorSpecialities = (req, res) => {
  Specialization.find()
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched all specializations",
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
 * @description API to fetch all doctors from database
 * @param {*} req
 * @param {*} res
 */
const createSpecialization = (req, res) => {
  Specialization.create(req.body)
    .then((result) => {
      return res.status(201).json({
        message: "Succesfully Created the specialization",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
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
  getDoctorSpecialities,
  createSpecialization,
  getDoctorsByLocation,
};
