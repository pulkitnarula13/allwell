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


router.post("/register", registerPatient);

router.post("/login", loginPatient);

router.get("/", getPatients);

router.put("/:id", updatePatient);

router.delete("/:id", deletePatient);

router.get("/:id", getPatientById);

module.exports = router;
