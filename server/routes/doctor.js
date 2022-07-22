const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
  registerDoctor,
  loginDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
  getDoctorById,
  getDoctorSpecialities,
  createSpecialization,
  getDoctorsByLocation,
} = require("../controller/doctor");
const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");

// Routes
/**
 * @swagger
 * /register:
 *   post:
 *     description: Register a new doctor
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/register", registerDoctor);

// Routes
/**
 * @swagger
 * /login:
 *   post:
 *     description: Send user to api for doctor login
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/login", loginDoctor);



// Routes
/**
 * @swagger
 * /doctor/specialities:
 *   get:
 *     description: Get specialities of a doctor
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/specialities", getDoctorSpecialities);

 // Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Get all the doctors based on location
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/location/", getDoctorsByLocation);

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
 *     description: Update information of a doctor profile
 *     responses:
 *       200:
 *         description: return positive response
 */
router.put("/:id", updateDoctor);

// Routes
/**
 * @swagger
 * /doctor/:id:
 *   delete:
 *     description: Delete the doctor using id from the database
 *     responses:
 *       200:
 *         description: return positive response
 */
router.delete("/:id", deleteDoctor);

// Routes
/**
 * @swagger
 * /doctor/:id:
 *   get:
 *     description: Get information of a doctor using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getDoctorById);


// Routes
/**
 * @swagger
 * /doctor/specialities:
 *   post:
 *     description: Creates specialities of a doctor
 *     responses:
 *       201:
 *         description: return positive response
 */
router.post(
  "/specialities",
  validateToken,
  verifyRoles(ROLE.ADMIN, ROLE.DOCTOR, ROLE.PATIENT),
  createSpecialization
);

module.exports = router;
