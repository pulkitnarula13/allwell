const mongoose = require("mongoose")

const Schema = mongoose.Schema

const specializationSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    symptoms: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Symptom'
    }
})

exports.Specialization = mongoose.model('Specialization', specializationSchema)