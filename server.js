const express = require("express");
const path = require("path");
const {clog} = require("./middleware/clog");
const notes = require("./routes/notes");
const api = require("./routes/api")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);

// Middleware for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Routes
app.use('/notes', notes);

// index.html route
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));