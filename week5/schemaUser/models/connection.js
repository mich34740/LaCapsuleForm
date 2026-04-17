#!/usr/bin/env node 
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://usergm34:sDA6bgeJQIDrCdAP@capsuledev.nvrknj9.mongodb.net/schemaUser';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error));

module.exports = connectionString; // Do not edit/remove this line
