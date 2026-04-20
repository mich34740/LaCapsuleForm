require("dotenv").config();
// Intégrez votre connecString MongoDB dans cette variable
const connectionString = process.env.connectionString;

module.exports = connectionString; // On ne touche pas à cette ligne 😉
