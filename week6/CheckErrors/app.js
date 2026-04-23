require('./models/connection');
const Product = require('./models/products');
const Username = require('./models/usernames');

//! Create new type document/object in 'types' collection
function addProduct(productName, productPrice, productCategorie) {
  const newProduct = new Product({
 					name: productName,
          price: productPrice,
					categorie: productCategorie,
					});
	    newProduct.save()
        .then(data => {console.log('Création Product')})
        .catch(err => {console.log(gestError(err))});        
};

//addProduct('couvercle', -10, 'util');

function addUserName() {
  for (let i=5; i<2005; i++){
    const newUserName = new Username({
 					username: `username${i}`,
          age: i,
					email: `username${i}@yahoo.fr`,
					});
	    newUserName.save()
        .then(data => {})
        .catch(err => {console.log(gestError(err))});        
  }      
  console.log('Création userName')
};
//addUserName();

function findUserEmail(textemail) {
  Username.find({ email: textemail }).explain('executionStats')
 .then(result => console.log(result))
 .catch(err => console.error(err));
}

findUserEmail("username1303@yahoo.fr");

function gestError(error) {
  if (error.name === "ValidationError") {
    return error.message;
  }
  if (err.code === 11000) {
    return "Duplicate key";
  }
}

// Do not edit/remove the code below this line !
module.exports = {
   addProduct
//   displayBooksAuthor,
//   createBook,
//   addAuthor,
  
//   deleteType,
 };
