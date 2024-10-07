// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const timestampRoutes = require('./routes/timestampRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', timestampRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// Middleware to handle JSON responses
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send("This is Timestamp Microservice!");
});

// /api/:date? route
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;

  let date;
  // If no date parameter, use the current date
  if (!dateParam) {
    date = new Date();
  } else {

    // Check if the dateParam is a timestamp (only digits) or a date string
    if (!isNaN(dateParam)) {

      // If it's a number, treat it as a Unix timestamp in milliseconds
      date = new Date(parseInt(dateParam));
    } else {
      // Otherwise, treat it as a date string
      date = new Date(dateParam);
    }
  }

  // Check if the date is valid
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Return the JSON response with unix and utc
  res.json({
    unix: date.getTime(), // Unix timestamp in milliseconds
    utc: date.toUTCString() // UTC date string
  });
});


