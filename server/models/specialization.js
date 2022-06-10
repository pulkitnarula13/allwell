const mongoose = require("mongoose")

const Schema = mongoose.Schema

const specializationSchema = new Schema({

    specializationName: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    }
})

exports.Specialization = mongoose.model('Specialization', specializationSchema)