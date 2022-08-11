const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
  createAppointment,
  getAllAppointments,
  getAppointmentByPatientId,
  getAppointmentByDoctorId,
  confirmAppointment,
  cancelAppointment,
  updateAppointment,
  getAppointmentById,
  completeAppointment,
  getAppointmentBasedOnDate,
  getUrgentAppointment,
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
router.post(
  "/",
  validateToken,
  verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN),
  createAppointment
);

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
router.get(
  "/",
  validateToken,
  verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN),
  getAllAppointments
);


// Routes
/**
 * @swagger
 * /appointments:
 *   get:
 *     description: Get urgent appointments
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get(
  "/urgent",
  validateToken,
  verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN),
  getUrgentAppointment
);

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
router.get(
  "/doctor/date/",
  validateToken,
  verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN),
  getAppointmentBasedOnDate
);

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
router.get(
  "/patient/:id",
  validateToken,
  verifyRoles(ROLE.PATIENT, ROLE.ADMIN),
  getAppointmentByPatientId
);

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
router.get(
  "/doctor/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN),
  getAppointmentByDoctorId
);

// // Routes
// /**
//  * @swagger
//  * /appointment/:id:
//  *   get:
//  *     description: Get appointment using id
//  *     responses:
//  *       200:
//  *         description: return positive response
//  */
router.get(
  "/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN),
  getAppointmentById
);

// Routes
/**
 * @swagger
 * /:id:
 *   put:
 *     description: Update the appointment using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put(
  "/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN),
  updateAppointment
);

// Routes

/**
 * @swagger
 * /confirm/:id:
 *   put:
 *     description: Confirm the appointment using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put(
  "/confirm/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN, ROLE.PATIENT),
  confirmAppointment
);

/**
 * @swagger
 * /complete/:id:
 *   put:
 *     description: Confirm the appointment using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put(
  "/complete/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN, ROLE.PATIENT),
  completeAppointment
);

// Routes
/**
 * @swagger
 * /cancel/:id:
 *   put:
 *     description: Cancel the appointment using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put(
  "/cancel/:id",
  validateToken,
  verifyRoles(ROLE.DOCTOR, ROLE.ADMIN),
  cancelAppointment
);

module.exports = router;
