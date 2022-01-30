const express = require("express");
const path = require("path");
const notes = require("./routes/notes");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Notes route
app.use('/notes', notes);

// index.html route
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));