const app = require('express').Router()
const path = require('path');

//Load HTML homepage
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//load notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = app;