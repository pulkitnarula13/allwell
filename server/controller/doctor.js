const Doctor = require('../models/Doctor');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const getDoctors = (req, res) => {
    Doctor.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched all doctors',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

const deleteDoctor = (req, res) => {
    const id = req.params.id;
    Doctor.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Doctor succesfully deleted",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

const updateDoctor = (req, res) => {
    const id = req.params.id;

    Doctor.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated Doctor',
            data: result
        });
    })
}

const getDoctorById = (req, res) => {
    const id = req.params.id;

    Doctor.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Doctor found succesfully with id ${id}`,
            data: result
        })
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        })
    })

}

const registerDoctor = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        const output = await Customer.create({
            name: req.body.name,
            password: newPassword,
            email: req.body.email,
            city: req.body.city,
            zipCode: req.body.zipCode,
            province: req.body.province,
            contact: req.body.contact
        })

        return res.status(200).json({
            message: "Doctor Registered Succesfully",
            data: output
        })

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const loginDoctor = async (req, res) => {
    const email = req.body.email;
    let doctor = await Doctor.findOne({ email: email});
    if (doctor) {
        const isValidPassword = await bcrypt.compare(req.body.password, customer.password);
        if (isValidPassword) {
            const token = jwt.sign({
                name: req.body.name,
                email: req.body.email
            }, process.env.JWT_SECRET)
            return res.status(200).json({
                token,
                message:"Succesfully Logged In"
            })
        } else {
            return res.status(401).json({
                message: "Incorrect Password"
            })
        }
    } else {
        return res.status(400).json({
            message: "User not found!"
        })
    }

}

module.exports = {
    getDoctors,
    deleteDoctor,
    updateDoctor,
    getDoctorById,
    registerDoctor,
    loginDoctor
}