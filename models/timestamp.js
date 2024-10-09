// models/Timestamp.js
const mongoose = require('mongoose');

const timestampSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    message: {
        type: String,
        required: true,
    },
});

const Timestamp = mongoose.model('Timestamp', timestampSchema);

module.exports = Timestamp;