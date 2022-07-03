const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
  createAppointment, getAllAppointments, getAppointmentByPatientId, getAppointmentByDoctorId,
} = require("../controller/appointment");
const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");


// Routes
/**
 * @swagger
 * /appointment:
 *   post:
 *     description: Add a new appointment
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/", validateToken, verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN),  createAppointment);

// Routes
/**
 * @swagger
 * /appointments:
 *   get:
 *     description: Get all the appointments
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/", getAllAppointments);

// // Routes
// /**
//  * @swagger
//  * /appointment/patient/:id:
//  *   get:
//  *     description: Get appointment using patinent id
//  *     responses:
//  *       200:
//  *         description: return positive response
//  */
router.get("/patient/:id", getAppointmentByPatientId);

// // Routes
// /**
//  * @swagger
//  * /appointment/patient/:id:
//  *   get:
//  *     description: Get appointment using patinent id
//  *     responses:
//  *       200:
//  *         description: return positive response
//  */
router.get("/doctor/:id", getAppointmentByDoctorId);

// // Routes
// /**
//  * @swagger
//  * /appointment/doctor/:id:
//  *   get:
//  *     description: Get appointment using doctor id
//  *     responses:
//  *       200:
//  *         description: return positive response
//  */
// router.put("/:id", updateAppointment);

// // Routes
// /**
//  * @swagger
//  * /doctor/:id:
//  *   delete:
//  *     description: Delete the appointment using id from the database
//  *     responses:
//  *       200:
//  *         description: return positive response
//  */
// router.delete("/:id", deleteAppointment);

module.exports = router;
