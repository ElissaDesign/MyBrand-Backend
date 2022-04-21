const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express()
app.use(bodyParser.json());



app.use('/api/blogs', require('./routes/blogRoutes'))


mongoose.connect( process.env.DB_CONNECTION,() => console.log('Connected to DB')
)

app.listen(port, () => console.log(`Server Started on port ${port}`))