const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/auth");

const {
  registerPatient,
  loginPatient,
  getPatients,
  updatePatient,
  deletePatient,
  getPatientById,
} = require("../controller/patient");

router.post("/register", registerPatient);

router.post("/login", loginPatient);

router.get("/", validateToken, getPatients);

router.put("/:id", validateToken, updatePatient);

router.delete("/:id",validateToken, deletePatient);

router.get("/:id", validateToken, getPatientById);

module.exports = router;
