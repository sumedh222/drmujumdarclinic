// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up the storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Save files to the 'images' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'images' folder
app.use('/images', express.static('images'));

// Serve the upload form
app.use(express.static('.'));

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up the storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); // Save files to the 'images' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static('.')); // Serve static files from the current directory

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up email transport
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password'    // Your email password or application-specific password
    }
});

// Serve static files
app.use(express.static('.'));

// Handle booking form submission
app.post('/submit-booking', (req, res) => {
    const { name, email, phone, date, time } = req.body;

    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Appointment Confirmation',
        text: `Dear ${name},\n\nYour appointment has been confirmed.\n\nDate: ${date}\nTime: ${time}\nPhone: ${phone}\n\nThank you for booking with us.\n\nBest regards,\nDr. Mujumdar Clinic`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('An error occurred while sending the confirmation email.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Booking confirmed. A confirmation email has been sent.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
