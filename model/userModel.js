const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    person_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        trim: true
    },
    enquiry: {
        type: String,
        required: true,
        trim: true
    },
    school_name: {
        type: String,
        required: true,
        trim: true
    },
    school_location: {
        type: String,
        required: true,
        trim: true
    },
    contact_number: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
