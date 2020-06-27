const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const courseRoute = require('./route/router.course')

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(courseRoute);


// Connection to server 
const PORT = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/coursesmanagement', { 
    useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => { 
        app.listen(PORT, ()=>{
            console.log(`server ${PORT} is start!! `);
        });
    }).catch(err => console.error(err));