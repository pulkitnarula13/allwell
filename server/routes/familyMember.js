const express = require("express");
const ROLE = require("../config/roles");
const router = express.Router();

const {
    addFamilyMember,
    updateFamilyMember,
    deleteFamilyMember,
    getMembersByPatient,
    getFamilyMemberById,
} = require("../controller/familyMember");

const validateToken = require("../middleware/auth");
const verifyRoles = require("../middleware/roleVerification");


        // Routes
 
// Routes
/**
 * @swagger
 * /familyMember:
 *   post:
 *     description: Add a new family member by patient
 *     responses:
 *       200:
 *         description: return positive response
 */
router.post("/", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), addFamilyMember);

// Routes
/**
 * @swagger
 * /familyMember/patient/:id:
 *   get:
 *     description: Get all the family members of a particular patient
 *     responses:
 *       200:
 *         description: return positive response
 */
router.get("/patient/:id", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), getMembersByPatient);

// Routes
/**
 * @swagger
 * /familyMember/:id:
 *   get:
 *     description: Get a family member by id
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.get("/:id", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), getFamilyMemberById);

// Routes
/**
 * @swagger
 * /familyMember/:id:
 *   delete:
 *     description: Delete a family mebver by id
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.delete("/:id", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), deleteFamilyMember);

 // Routes
/**
 * @swagger
 * /familyMember/:id:
 *   put:
 *     description: Update a family member by id
 *     responses:
 *       200:
 *         description: return positive response
 */
 router.put("/:id", validateToken, verifyRoles(ROLE.ADMIN, ROLE.PATIENT), updateFamilyMember);

module.exports = router;
