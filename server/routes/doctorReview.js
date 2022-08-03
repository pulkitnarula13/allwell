const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
  addDoctorReview,
  getDoctorReviews,
  getReviewsByDocId,
} = require("../controller/doctorReview");

const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");

// Routes
/**
 * @swagger
 * /doctorReview:
 *   post:
 *     description: Add a new doctor Review by patient
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.post("/doc", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), addDoctorReview);


// // Routes
/**
 * @swagger
 * /doctorReviewsAll:
 *   get:
 *     description: Get all the doctor reviews (For Admin Role)
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT, ROLE.DOCTOR), getDoctorReviews);
 

// Routes
/**
 * @swagger
 * /doctorReviews:
 *   get:
 *     description: Get all the Reviews of a particular doctor
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/doctor/:id", validateToken, verifyRoles(ROLE.ADMIN, ROLE.DOCTOR, ROLE.PATIENT), getReviewsByDocId);



module.exports = router;
