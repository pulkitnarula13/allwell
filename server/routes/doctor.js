const express = require["express"];
const router = express.Router();

const {
    registerDoctor,
    loginDoctor,
    getDoctors, 
    updateDoctor,
    deleteDoctor,
    getDoctorById
} = require["../controller/doctor"]

router.post["/doctorRegister", registerDoctor];

router.post["/doctorLogin", loginDoctor];

router.get["/doctors", getDoctors];

router.get["/doctor:id", getDoctorById];

router.put["/doctor:id", updateDoctor];

router.delete["/doctor:id", deleteDoctor];

module.exports = router;

