// server.js
const express = require('express');
//importing cors
const cors = require('cors');
const api = require("./api");


//creating app
const app = express();


//Enable cors for all routes
app.use(cors());
//Parse incoming Json data
app.use(express.json());


//Test endpoint
app.use('/employee-api', api);


//code for listening
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
});