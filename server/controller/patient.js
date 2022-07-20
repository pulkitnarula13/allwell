const { Patient } = require("../models/patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Address } = require("../models/address");
const { Symptom } = require("../models/Symptoms");

const upload = require("../utils/upload");
const ROLE = require("../config/roles");
const { FamilyMember } = require("../models/familyMember");

/**
 * @description API to register patients to database
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const registerPatient = async (req, res) => {
  try {
    let newPassword = await bcrypt.hash(req.body.password, 10);

    const savedPatient = await Patient.create({
      name: req.body.name,
      password: newPassword,
      email: req.body.email.toLowerCase(),
      healthNumber: req.body.healthNumber,
      dob: req.body.dob,
      gender: req.body.gender,
      roles: [ROLE.PATIENT]
    });

    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        roles: [ROLE.PATIENT]
      },
      process.env.JWT_SECRET
    );


    return res.status(200).json({
      message: "Patient Registered Succesfully",
      data: {
        token,
        savedPatient
      },
    }); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @description API to login Patients
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
const loginPatient = async (req, res) => {
  const email = req.body.email;
  let patient = await Patient.findOne({ email: email.toLowerCase() });
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
          roles: patient.roles
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

/**
 * @description API to fetch all patients from database
 * @param {*} req
 * @param {*} res
 */
const getPatients = (req, res) => {
  Patient.find()
    .populate({
      path: "address",
    })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched Patients",
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
 * @description API to update a patient by id
 * @param {*} req
 * @param {*} res
 */
 const addFamilyForPatient = async (req, res) => {
  const id = req.params.id;

  // const uploadProfilePicture = await upload(
  //   `${Date.now() + "" + req.body.name}`,
  //   req.body.profilePicture,
  //   "jpg",
  //   "patient",
  //   req.body.name
  // );


  const familyMember = await FamilyMember.create({
    profilePicture: '',
    name: req.body.name,
    email: req.body.email,
    relationship: req.body.relationship,
    healthNumber: req.body.healthNumber,
    dob: req.body.dob
  })


  Patient.findOneAndUpdate({ _id: id }, {
    familyMember
  }, {
    returnOriginal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Succesfully Added Family Member",
      data: result,
    });
  });
};




/**
 * @description API to update a patient by id
 * @param {*} req
 * @param {*} res
 */
const updatePatient = (req, res) => {
  const id = req.params.id;


      // const savedAddress = await Address.create({
    //   houseNumber: req.body.houseNumber,
    //   city: req.body.city,
    //   province: req.body.province,
    //   postalCode: req.body.postalCode,
    //   country: req.body.country,
    // });

    // const uploadProfilePicture = await upload(
    //   `${Date.now() + "" + req.body.name}`,
    //   req.body.profilePicture,
    //   "jpg",
    //   "patient",
    //   req.body.name
    // );

    // const uploadHealthDocument = await upload(
    //   `${Date.now() + "" + req.body.healthDocument}`,
    //   req.body.image,
    //   "jpg",
    //   "patient",
    //   req.body.name
    // );

  Patient.findOneAndUpdate({ _id: id }, req.body, {
    returnOriginal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Succesfully updated the Patient",
      data: result,
    });
  });
};

/**
 * @description API to delete patients
 * @param {*} req
 * @param {*} res
 */
const deletePatient = (req, res) => {
  const id = req.params.id;
  Patient.findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({
        message: "Patient succesfully delete",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

/**
 * @description Api to fetch patient based on given ID
 * @param {*} req
 * @param {*} res
 */
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


/**
 * @description API to fetch all specialities of doctor from DB
 * @param {*} req
 * @param {*} res
 */
 const getSymptoms = (req, res) => {
  Symptom.find()
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched all Symptoms",
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
 * @description API to fetch all the symptoms from database
 * @param {*} req
 * @param {*} res
 */
 const createSymptom = (req, res) => {
  
  Symptom.create({
    name: req.body.name,
    description: req.body.description
  })
    .then((result) => {
      return res.status(201).json({
        message: "Succesfully Created the Symptom",
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
  registerPatient,
  loginPatient,
  getPatients,
  updatePatient,
  deletePatient,
  getPatientById,
  createSymptom,
  getSymptoms,
  addFamilyForPatient
};
