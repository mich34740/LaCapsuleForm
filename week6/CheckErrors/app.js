require('./models/connection');
const Product = require('./models/products');

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

addProduct('couvercle', -10, 'util');

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
