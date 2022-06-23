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

router.post("/login", loginDoctor);

router.get("/", getDoctors);

router.put("/:id", updateDoctor);

router.delete("/:id", deleteDoctor);

router.get("/:id", getDoctorById);

module.exports = router;
