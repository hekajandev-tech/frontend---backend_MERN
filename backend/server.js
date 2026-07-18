// server.js
const express = require('express');
//importing cors
const cors = require('cors');

//creating app
const app = express();


//Enable cors for all routes
app.use(cors());
//Parse incoming Json data
app.use(express.json());


//Test endpoint
app.get('/employee-api', (req,res) => {
    res.json({message:'Backend for employee-app working!'})
});


//code for listening
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
});