const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true
    },

    // rollNo: {
    //     type: Number,
    //     unique: true
    // }
    gender: {
        type: String,
        enum: ['male', 'female', 'others'],
        required: true
    }


})


module.exports = mongoose.model('Student', StudentSchema);