const express = require('express');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
const notes = require('./db/db.json');

//giving app express functionality
const app = express();

//what port to listen to for responses
const Port = 3001;

//middleware
app.use(express.urlencoded(({ extended: true})));
app.use(express.json());

//static middleware (allows files that are dependant on one another be ran)
app.use(express.static('./public'));

//GET API db.json
app.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
})

//function to add notes to db.json via POST
app.post('api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});


//Load HTML homepage
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//load notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//listen to port
app.listen(Port, () => {
    console.log(`I'm listening to you on port ${Port}!`);
});


