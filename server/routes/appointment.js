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
 * /appointment:
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
 * /appointments:
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
 * /appointment/:id:
 *   get:
 *     description: Get appointment using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getAppointmentById);


// Routes
/**
 * @swagger
 * /appointment/:id:
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


module.exports = router;
