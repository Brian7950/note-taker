const express = require('express');

// const uuid = require('uuid');


//giving app express functionality
const app = express();

//what port to listen to for responses
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded(({ extended: true})));
app.use(express.json());

//static middleware (allows files that are dependant on one another be ran)
app.use(express.static('./public'));


const apiRoutes = require("./routes/api_routes");
const htmlRoutes = require("./routes/html_routes");
app.use(apiRoutes)
app.use(htmlRoutes)






//listen to port
app.listen(PORT, () => {
    console.log(`I'm listening to you on port ${PORT}!`);
});


