const { Appointment } = require("../models/appointment");
const { Doctor } = require("../models/doctor");
const { Patient } = require("../models/patient");
const { QNA } = require("../models/QnA");

/**
 * @description API to fetch all qna from DB
 * @param {*} req
 * @param {*} res
 */
const getAllQNAPatients = (req, res) => {
  QNA.find({ patient: req.params.id })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched the questions",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

// /**
//  * @description API to fetch all appointments from database
//  * @param {*} req
//  * @param {*} res
//  */
// const createQNA = async (req, res) => {
//   try {
//     const data = req.body;

//     const findDoctor = await Doctor.findById(data.doctor);

//     if (!findDoctor) {
//       return res.status(404).json({
//         message: "Doctor not found",
//       });
//     }

//     const findPatient = await Patient.findById(data.patient);

//     if (!findPatient) {
//       return res.status(404).json({
//         message: "Patient not found",
//       });
//     }

//     const appointmentData = await Appointment.create({
//       date: data.date,
//       doctor: data.doctor,
//       patient: data.patient,
//       symptoms: data.symptoms,
//       qna: data.qna,
//     });

//     return res.status(201).json({
//       message: "Appointment Setup Succesfully",
//       data: appointmentData,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

module.exports = {
  getAllQNAPatients,
};
