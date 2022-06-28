const express = require("express");
const router = express.Router();

const {
  registerPatient,
  loginPatient,
  getPatients,
  updatePatient,
  deletePatient,
  getPatientById,
} = require("../controller/patient");

// Routes
/**
 * @swagger
 * /register:
 *   post:
 *     description: Register a new patient
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/register", registerPatient);

// Routes
/**
 * @swagger
 * /login:
 *   post:
 *     description: Send user to api for patient login
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/login", loginPatient);

// Routes
/**
 * @swagger
 * /patient:
 *   get:
 *     description: Get list of the all the patients
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/", getPatients);

// Routes
/**
 * @swagger
 * /patient/:id:
 *   put:
 *     description: Update information of a patient in the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put("/:id", updatePatient);

// Routes
/**
 * @swagger
 * /patient/:id:
 *   delete:
 *     description: Deelete a patient profile using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.delete("/:id", deletePatient);

// Routes
/**
 * @swagger
 * /patient/:id:
 *   get:
 *     description: Get information of the patient using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getPatientById);

module.exports = router;
