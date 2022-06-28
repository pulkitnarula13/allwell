const express = require("express");
const router = express.Router();

const {
  registerDoctor,
  loginDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
  getDoctorById,
} = require("../controller/doctor");

// Routes
/**
 * @openapi
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
 * @openapi
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
 * @openapi
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
 * @openapi
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
 * @openapi
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
 * @openapi
 * /doctor/:id:
 *   get:
 *     description: Get information of a doctor using id
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/:id", getDoctorById);

module.exports = router;
