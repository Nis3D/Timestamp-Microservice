// routes/timestampRoutes.js
const express = require('express');
const Timestamp = require('../models/timestamp');

const router = express.Router();

// Create a new timestamp
router.post('/timestamps', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const newTimestamp = new Timestamp({ message });
        await newTimestamp.save();
        res.status(201).json(newTimestamp);
    } catch (error) {
        res.status(500).json({ error: 'Error creating timestamp' });
    }
});

// Get all timestamps
router.get('/timestamps', async (req, res) => {
    try {
        const timestamps = await Timestamp.find();
        res.status(200).json(timestamps);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching timestamps' });
    }
});

module.exports = router;