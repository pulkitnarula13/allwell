const express = require("express");
const ROLE = require("../config/roles");
const { getAllQNAPatients } = require("../controller/qna");
const router = express.Router();


const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");


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
router.get("/", validateToken, verifyRoles(ROLE.PATIENT, ROLE.DOCTOR, ROLE.ADMIN), getAllQNAPatients);

module.exports = router;
