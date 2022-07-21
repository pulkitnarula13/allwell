const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
  registerPatient,
  loginPatient,
  getPatients,
  updatePatient,
  deletePatient,
  getPatientById,
  createSymptom,
  getSymptoms,
  addFamilyForPatient,
  getMembers,
} = require("../controller/patient");

const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");


// Routes
/**
 * @swagger
 * /patient/symptoms:
 *   get:
 *     description: Get symptoms
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/symptoms",validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT, ROLE.DOCTOR), getSymptoms);

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
 router.get("/:id",validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT, ROLE.DOCTOR), getPatientById);
 
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
router.get("/",validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), getPatients);

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
router.put("/:id",updatePatient);


// Routes
/**
 * @swagger
 * /patient/family/:id:
 *   put:
 *     description: Add family member of a patient
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.put("/family/:id", addFamilyForPatient);


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
router.delete("/:id", verifyRoles(ROLE.ADMIN, ROLE.PATIENT), validateToken, deletePatient);


// Routes
/**
 * @swagger
 * /patient/symptoms:
 *   post:
 *     description: Creates symptoms 
 *     responses:
 *       201:
 *         description: return positive response
 */
 router.post(
  "/symptoms",
  validateToken,
  verifyRoles(ROLE.ADMIN, ROLE.DOCTOR, ROLE.PATIENT),
  createSymptom
);


// Routes
/**
 * @swagger
 * /patient/members/:id:
 *   post:
 *     description: Creates symptoms 
 *     responses:
 *       201:
 *         description: return positive response
 */
 router.get(
  "/members/:id",
  validateToken,
  verifyRoles(ROLE.ADMIN, ROLE.DOCTOR, ROLE.PATIENT),
  getMembers
);


module.exports = router;
