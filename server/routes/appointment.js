const express = require("express");
const router = express.Router();

const {
  addAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
  getAppointmentById
} = require("../controller/doctor");


// Routes
/**
 * @swagger
 * /register:
 *   post:
 *     description: Add a new appointment
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/appointment", addAppointment);


// Routes
/**
 * @swagger
 * /doctor/specialities:
 *   get:
 *     description: Get all the appointments
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/appointments", getAppointments);

// Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Get all the registered doctors
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/", getDoctors);

// Routes
/**
 * @swagger
 * /doctor/:id:
 *   put:
 *     description: Update information of an appointment
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put("/:id", updateAppointment);

// Routes
/**
 * @swagger
 * /doctor/:id:
 *   delete:
 *     description: Delete the appointment using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.delete("/:id", deleteAppointment);

// Routes
/**
 * @swagger
 * /doctor/:id:
 *   get:
 *     description: Get appointment using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getAppointmentById);


module.exports = router;
