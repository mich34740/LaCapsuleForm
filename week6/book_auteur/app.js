require('./models/connection');
const book = require('./models/books');
const genre = require('./models/genres');
const author = require('./models/authors');

//! Create new type document/object in 'types' collection
function addGenre(genreName, description) {
  const newGenre = new genre({
 					name: genreName,
					description: description,
					});
	    newGenre.save()
        .then(data => {console.log('Création Genre');	})
};

//   addGenre('rock', 'brown');
//   addGenre('electric', 'red');
//   addGenre('glass', 'white');

function addAuthor(authorName) {
  const newAuthor = new author({
 					name: authorName,
					});
	    newAuthor.save()
        .then(data => {console.log('Création author');	})
};

//   addAuthor('Stephen King');
//   addAuthor('Victor Hugo');
//   addAuthor('Eric Emmanuel Smicht');


//! Create new Book document/object in 'Books' collection
function createBook(bookTitle, isbnId, authorId,genresBook,reviewBook) {
  const newBook = new book({
 					 title: bookTitle,
                     isbn: isbnId,
                     author: authorId,    
                     genres: genresBook,
                    reviews: reviewBook,
					});
	    newBook.save()
        .then(data => {console.log('Création Book');	})
};

// createBook('ça', 231321231321321231,'69e88aa3af47565ccdb5ad5b',['69e88aa3af47565ccdb5ad5a','69e88aa3af47565ccdb5ad58']); 
// createBook('Le visiteur', 2312313321321231,'69e88aa3af47565ccdb5ad5d',['69e88aa3af47565ccdb5ad59']); 
// createBook("J'accuse", 231231332565651321231,'69e88aa3af47565ccdb5ad5c', ['69e88aa3af47565ccdb5ad59']); 

//! Display all Books from database
function displayBooksAuthor() {
	book.find()
    .populate('author','name website')
    .then(data => {console.log("ALL BookS =>", data);
  });
};
//displayBooksAuthor();

//! Display all Books from database
function displayBooksGenre() {
	book.find()
    .populate('genres','name')
    .then(data => {console.log("ALL BookS =>", JSON.stringify(data, null, 2))});
};
displayBooksGenre();

//! Update a type document/object in 'types' collection
function updateAuthor(name, textBio, website) {
    const updateFields = {};
    if (textBio !== undefined && textBio !== "") {
        updateFields.bio = textBio;
    };
    if (website !== undefined && website !== "") {
        updateFields.website = website;
    };
     if (Object.keys(updateFields).length === 0) {
      console.log("Aucune donnée à mettre à jour");
      return;
    };
    author.updateOne({name: name},{$set: updateFields}).then(() => {console.log(`Author updated for ${name}`)})
};
const textBio=`Éric-Emmanuel Schmitt enseigne un an au lycée militaire de Saint-Cyr pendant son service militaire[4], puis deux ans à l’université de Besançon en tant qu’assistant-normalien, puis un an dans un lycée de Cherbourg. Il est ensuite élu maître de conférences à l'université de Chambéry, où il enseigne durant quatre ans[réf. nécessaire].

Le succès français puis international de sa pièce Le Visiteur en 1994 lui fait quitter l’université pour se consacrer entièrement à l’écriture[5].


Éric-Emmanuel Schmitt à la foire du livre de Bruxelles en 2012.
Installé à Bruxelles depuis 2002, il a acquis la nationalité belge en 2008[6]. Le 9 juin 2012 il est élu à l’Académie royale de langue et de littérature françaises de Belgique au fauteuil 33, celui qu’avaient occupé Colette et Cocteau[7].

En 2016, il devient membre de l'Académie Goncourt[8] et publie un roman d’enquête sur la violence et le sacré, L'Homme qui voyait à travers les visages.

Éric-Emmanuel Schmitt a aussi entrepris un livre qui raconte l'histoire de l'humanité dans une épopée de huit tomes[9]. La série est intitulée La Traversée des Temps[10] et jusqu'à date, seulement les cinq premières parties ont été publiées, soit Paradis perdus en 2021, La Porte du ciel en 2021, Soleil sombre en 2022, La Lumière du bonheur en 2024 et Les deux royaumes en 2025.`

//updateAuthor('Stephen King', textBio );
//updateAuthor('Stephen King', textBio, "https://stephenking.com/" );
//updateAuthor('Victor Hugo',textBio);
//updateAuthor('Eric Emmanuel Schmitt',textBio,"https://www.eric-emmanuel-schmitt.com/");


//! Delete a type document/object in 'types' collection
function deleteType(typeName) {
  Type.deleteOne({name: typeName}).then(() => {console.log(`Type Color delete for ${typeName} `)})
};
// deleteType('rock')

// Do not edit/remove the code below this line !
module.exports = {
  addGenre,
  displayBooksAuthor,
  createBook,
  addAuthor,
  
  deleteType,
};
