#!/usr/bin/env node 
const mongoose = require('mongoose');
require("dotenv").config();
const connectionString = process.env.connectionString+"/Check_error";


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error));

module.exports = connectionString; // Do not edit/remove this line
