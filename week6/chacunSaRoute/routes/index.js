var express = require('express');
var router = express.Router();

router.param('name', (req, res, next, name) => {

if (name==="admin") {
  res.status(403).send("Accèsrefusé");      
 } else {    
  next();   
 }
});

/* GET home page. */
router.get('/greet/:name?', function(req, res, next) {
  let nameTest = req.params.name;
  if (!nameTest) {nameTest='invité'}
  res.send(`Bonjour, ${nameTest}!`);
});

router.get('/greet2/:name?', function(req, res, next) {
  let nameTest = req.params.name;
  if (!nameTest) {nameTest='invité'}
  res.send(`Aurevoir, ${nameTest}!`);
});


router.param('bookId', (req, res, next, bookId) => {
  console.log(bookId);
  console.log(Number.isNaN(bookId));
if (Number.isNaN(bookId)) {
  res.status(400).send("ID de livre invalide");      
 } else {    
  next();   
 }
});

router.get('/book/:bookId/:chapterNumber', function(req, res, next) {
  res.send(`Livre ID: [${req.params.bookId}], Chapitre: [${req.params.chapterNumber}]`);
});

router.get('/search', function(req, res, next) {
  console.log(req.body.term)
  let paramTerm=req.body.term;
  let paramSort=req.body.sort;
  if (!paramSort || !paramTerm) {
    res.send("Veuillez fournir un terme de recherche et un ordre de tri")
  } else {
    res.send(`Recherche pour: [${paramTerm}], tri: [${paramSort}]`);
  }
});
module.exports = router;
