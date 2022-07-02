const mongoose = require("mongoose")

const Schema = mongoose.Schema

const chatAppointmentSchema = new Schema({

    date: {
        type: date,
        required: true    
    },

    time: {
        type: time,
        required: true
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Doctor",
        required: true
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient",
        required: true
    }
})

exports.ChatAppointment = mongoose.model('ChatAppointment', chatAppointmentSchema)