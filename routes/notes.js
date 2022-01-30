const notes = require("express").Router();
const { readFromFile } = require("../helpers/fsUtils");

notes.get('/', (req, res) => {
    res.readFromFile('../db/db.json').then(data => res.json(JSON.parse(data)))
});