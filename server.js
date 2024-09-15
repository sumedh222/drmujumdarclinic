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
