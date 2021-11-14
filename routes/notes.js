const notes = require('express').Router();
const { readFromFile, writeFromFile, readAndAppend, } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// diagnostics.get('/', (req, res) => {
//   readFromFile('./db/diagnostics.json').then((data) =>
//     res.json(JSON.parse(data))
//   );
// });

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );
});

// diagnostics.post('/', (req, res) => {
//   console.log(req.body);

//   const { isValid, errors } = req.body;

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    const createNote = {
        title,
        text,
        id: uuidv4()
    };
    readAndAppend(createNote, "./db/db.json");
    res.json("Note created");
});

module.exports = notes;