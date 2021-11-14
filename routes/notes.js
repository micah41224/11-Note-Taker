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