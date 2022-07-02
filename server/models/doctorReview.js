const mongoose = require("mongoose")

const Schema = mongoose.Schema

const doctorReviewSchema = new Schema({

    rating: {
        type: Number,
        required: true    
    },

    feedback: {
        type: String,
    },

    authorId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient"
    }
})

exports.DoctorReview = mongoose.model('Specialization', doctorReviewSchema)