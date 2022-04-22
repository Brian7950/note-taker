const fs = require('fs');
const { isModuleNamespaceObject } = require('util/types');
let notes = require('../../db/db.json');

const app = require('express').Router()


app.get('/api/notes', (req, res) => {
    note = JSON.parse(fs.readFileSync("./db/db.json"))
    console.log("GEt",notes)
    res.json(notes)
})

//function to add notes to db.json via POST
app.post('/api/notes', (req, res) => {
    // const newNote = {
    //     title:req.body.title,
    //     text:req.body.text,
    //     id: Math.floor(Math.random*100)
    // }
 
    const newNotes = {...req.body,id:Math.floor(Math.random()* 1000)} //spread operator
    console.log(newNotes)
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

app.delete('/api/notes/:id', (req, res) => {
    let noteList = []
    notes.forEach(ele => {
        if(ele.id != req.params.id){
            noteList.push(ele)
        }
    })
    console.log(noteList)
    notes = noteList
 
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
});

module.exports = app;