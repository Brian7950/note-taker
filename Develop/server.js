const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');

//giving app express functionality
const app = express();

//what port to listen to for responses
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


