// Intégrez votre connecString MongoDB dans cette variable
require("dotenv").config();
const connectionString = process.env.connectionString;

module.exports = connectionString; // On ne touche pas à cette ligne 😉
