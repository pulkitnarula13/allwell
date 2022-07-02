const { appointment } = require("../models/chatAppointment");



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
   * @description API to delete Appointment
   * @param {*} req
   * @param {*} res
   */
  const deleteAppointment = (req, res) => {
    const id = req.params.id;
    Appointment.findByIdAndDelete(id)
      .then((result) => {
        return res.status(200).json({
          message: "Appointment succesfully deleted",
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
        });
      });
  };
  
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
   const getAppointments = (req, res) => {
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
   * @description API to fetch all appointments from database
   * @param {*} req
   * @param {*} res
   */
   const createAppointment = (req, res) => {
    
    Appointment.create(req.body)
      .then((result) => {
        return res.status(201).json({
          message: "Succesfully Created the Appointment",
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
    addAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
  };
