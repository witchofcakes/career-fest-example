const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const regSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: 'Email must be unique.'
    },
    course: {
        type: String,
        required: true
    },
    spec: {
        type: String,
        required: true
    },
    publicUrl: {type: String}

},{timestamps: true});


const regModel = mongoose.model('User', regSchema);


module.exports = regModel;