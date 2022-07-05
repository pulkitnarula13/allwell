const { Appointment } = require("../models/appointment");
const { Doctor } = require("../models/doctor");
const { Patient } = require("../models/patient");
const { QNA } = require("../models/QnA");
const upload = require("../utils/upload");

/**
 * @description API to update Appointment
 * @param {*} req
 * @param {*} res
 */
const updateAppointment = (req, res) => {
  const id = req.params.id;

  Appointment.findOneAndUpdate({ _id: id }, req.body, {
    returnOrignal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Succesfully updated the Appointment",
      data: result,
    });
  });
};

/**
 * @description API to cancel Appointment
 * @param {*} req
 * @param {*} res
 */
 const cancelAppointment = (req, res) => {
  const id = req.params.id;

  Appointment.findOneAndUpdate({ _id: id }, {
    cancelled: true
  }, {
    returnOrignal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Appointment Cancelled",
      data: result,
    });
  });
};

/**
 * @description API to confirm Appointment
 * @param {*} req
 * @param {*} res
 */
 const confirmAppointment = (req, res) => {
  const id = req.params.id;

  Appointment.findOneAndUpdate({ _id: id }, {
    confirmed: true,
    date: req.body.date
  }, {
    returnOrignal: false,
  }).then((result) => {
    res.status(200).json({
      message: "Appointment Confirmed",
      data: result,
    });
  });
};

// /**
//  * @description API to delete Appointment
//  * @param {*} req
//  * @param {*} res
//  */
// const deleteAppointment = (req, res) => {
//   const id = req.params.id;
//   Appointment.findByIdAndDelete(id)
//     .then((result) => {
//       return res.status(200).json({
//         message: "Appointment succesfully deleted",
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({
//         message: error.message,
//       });
//     });
// };

/**
 * @description Api to fetch Appointment based on given ID
 * @param {*} req
 * @param {*} res
 */
const getAppointmentById = (req, res) => {
  const id = req.params.id;

  Appointment.findById(id)
    .then((result) => {
      return res.status(200).json({
        message: `Appointment found succesfully`,
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
 * @description API to fetch all appointments from DB
 * @param {*} req
 * @param {*} res
 */
 const getAllAppointments = (req, res) => {
  Appointment.find()
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched all Appointments",
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
 * @description API to fetch appointments by patient ID from DB
 * @param {*} req
 * @param {*} res
 */
 const getAppointmentByPatientId = (req, res) => {
  Appointment.find({ patient: req.params.id})
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched  Appointment for given patient",
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
 * @description API to fetch appointments from DB
 * @param {*} req
 * @param {*} res
 */
 const getAppointmentByDoctorId = (req, res) => {
  Appointment.find({ doctor: req.params.id}).populate({
    path: "patient"
  }).populate({
    path: "symptoms"
  })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched  Appointment for given patient",
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
 * @description API to fetch all appointments from database
 * @param {*} req
 * @param {*} res
 */
const createAppointment = async (req, res) => {
  try {
    const data = req.body;

    const findDoctor = await Doctor.findById(data.doctor);

    if (!findDoctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const findPatient = await Patient.findById(data.patient);

    if (!findPatient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    const modifiedData = req.body.qna.map( (val) => {
      if (val.images.length !== 0) {
        const newData =  val.images.map( (image) => {

        const uploadImage = uploadImageTOS3(image, req.body.patient);
        image = uploadImage;
        return image;
      })
      val.images = newData;
    }
    return val;
    });
    const qna = await QNA.insertMany(modifiedData);

    console.log(qna);

    const appointmentData = await Appointment.create({
      date: data.date,
      doctor: data.doctor,
      patient: data.patient,
      symptoms: data.symptoms,
      qna: qna,
    });

    return res.status(201).json({
      message: "Appointment Setup Succesfully",
      data: appointmentData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const uploadImageTOS3 = async (image, user) => {
  const uploadedImage = await upload(
    `${Date.now() + "" + user}`,
    image,
    "jpg",
    "patient",
    user
  );

  return uploadedImage;
}
module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentByPatientId,
  getAppointmentByDoctorId,
  updateAppointment,
  confirmAppointment,
  cancelAppointment,
  getAppointmentById
};
