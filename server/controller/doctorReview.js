const { DoctorReview } = require("../models/doctorReview");
const { Doctor } = require("../models/doctor");
const { Patient } = require("../models/patient");

/**
 * @description API to create a doctor review 
 * @param {*} req
 * @param {*} res
 */

const addDoctorReview = async (req, res) => {
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


    const reviewData = await DoctorReview.create({
      doctor: data.doctor,
      patient: data.patient,
      rating: data.rating,
      feedback: data.feedback
    });

    return res.status(201).json({
      message: "Review posted succesfully",
      data: reviewData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};



/**
 * @description API to fetch all doctor reviews from DB
 * @param {*} req
 * @param {*} res
 */
const getDoctorReviews = (req, res) => {
  DoctorReview.find().populate({
    path: "patient"
  })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched all doctor reviews",
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
 * @description API to fetch doctor reviews of a particular doctor from DB
 * @param {*} req
 * @param {*} res
 */
const getReviewsByDocId = (req, res) => {
  DoctorReview.find({ doctor: req.params.id }).populate({
    path: "patient"
  })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched Reviews of a given doctor",
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
 * @description API to fetch doctor ratings of a particular doctor from DB
 * @param {*} req
 * @param {*} res
 */
 const getRatingByDocId = (req, res) => {
  DoctorReview.find({ doctor: req.params.id })
    .select("rating")
    .then((result) => {
      let rating = result.map(ra => ra.rating).reduce((rat, ra) => ra + rat) / Object.keys(result).length;
      console.log(rating)
      return res.status(200).json({
        message: "Succesfully fetched Ratings of a given doctor",
        data: rating,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};


module.exports = {
  addDoctorReview,
  getDoctorReviews,
  getReviewsByDocId,
  getRatingByDocId
};
