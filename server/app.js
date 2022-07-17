const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(express.static(path.resolve(__dirname, './build')));

app.use(logger('combined'));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);


const connectionString = "mongodb://localhost:27017/bcf";

mongoose.connect(connectionString, { useNewUrlParser: true }, function(err){console.log(err)});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.post('/api/register', require('./routes/registration.js'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


app.listen(process.env.PORT,
    () => console.log(`Starting the server on port ${process.env.PORT} in ${process.env.MODE} mode.`));
