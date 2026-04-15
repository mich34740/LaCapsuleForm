#!/usr/bin/env node 
const db = require('./database/setup') // On ne touche pas à cette ligne 😉


// Complétez la fonction findLastActiveUsers pour qu'elle affiche (dans un console.log) les noms, adresses e-mail et âges des 10 utilisateurs actifs les plus récents, triés par leur date de dernière activité.

function findLastActiveUsers() {
    db.find()
            .where('isActive').eq(true) 
            .limit(10)
            .sort({lastActive: -1})
            .select('name email age')
            .then(users => console.log(users));
}
//findLastActiveUsers()


// Complétez la fonction findInactiveYoungUsers pour qu'elle affiche (dans un console.log) les noms et les adresses e-mail des 5 utilisateurs non actifs de moins de 18 ans triés par âge décroissant

function findInactiveYoungUsers() {
 db.find()
            .where('isActive').eq(false) 
            .where('age').lt(18)
            .limit(5)
            .sort({age: -1})
            .select('name email')
            .then(users => console.log(users));
}
//findInactiveYoungUsers()


//Complétez la fonction findOldActiveUsers pour qu'elle affiche (dans un console.log) tous les utilisateurs qui ont été très actifs (au moins 10 connexions) dans le passé, mais dont la dernière activité remonte à plus de 3 mois. Récupérez les noms, les adresses e-mail, et la date de dernière activité de ces utilisateurs, et triez les résultats par date de dernière activité de manière ascendante.

function findOldActiveUsers() {
const oldDate = new Date();
oldDate.setMonth(oldDate.getMonth()-3);
console.log(oldDate);

db.find()
            .where('dailyActivityLogs').gte(10) 
            .where('lastActive').lt(oldDate)
            .sort({lastActive: 1})
            .select('name email lastActive')
            .then(users => console.log(users));
}
findOldActiveUsers()


//Complétez la fonction findOldInactiveUsers pour qu'elle affiche (dans un console.log) les utilisateurs inactifs (isActive: false) dont la dernière activité remonte à plus d'un an, à l'exception des utilisateurs de moins de 18 ans et de plus de 65 ans.

function findOldInactiveUsers() {

}
//findOldInactiveUsers()


//Complétez la fonction findTravelAndMusicUsers pour qu'elle affiche (dans un console.log) les utilisateurs qui ont à la fois "musique" et "voyage" dans leurs interestTags, indiquant un intérêt croisé spécifique. Sélectionnez leurs noms et adresses e-mail, et triez les utilisateurs par âge en ordre croissant.

function findTravelAndMusicUsers() {

}
//findTravelAndMusicUsers()


//Complétez la fonction findTechAndHealthNonSeniorUserspour qu'elle affiche (dans un console.log) les utilisateurs inactifs ayant "technologie" ou "santé" dans leurs interestTags et âgés de moins de 50 ans. Sélectionnez les noms et adresses e-mail, et triez les résultats par lastActive de manière décroissante pour cibler les utilisateurs récemment inactifs en priorité.

function findTechAndHealthNonSeniorUsers() {

}
//findTechAndHealthNonSeniorUsers()


//Complétez la fonction findNonFinanceUserspour qu'elle affiche (dans un console.log) les utilisateurs actifs qui ne montrent aucun intérêt pour "la finance" et "l'investissement" dans leurs interestTags. Sélectionnez les noms et adresses e-mail de ces utilisateurs et triez les résultats par age en ordre décroissant.

function findNonFinanceUsers() {

}
//findNonFinanceUsers()


/*Complétez la fonction findSelectedUsers pour qu'elle affiche (dans un console.log) les utilisateurs selon les critères suivants :
 - Utilisateurs qui ont "la photographie" dans leurs interestTags et dont la lastActive date d'il y a plus de 6 mois.
 - Utilisateurs qui ont dailyActivityLogs supérieur à 5 (très actifs) mais dont le tableau interestTags est vide.
 - Pour les utilisateurs sélectionnés, récupérez les noms, les adresses e-mail et la date de leur dernière activité. Triez les résultats par lastActive de manière ascendante.
 Vous devrez utiliser l'opérateur $or*/

 function findSelectedUsers() {

 }

 //findSelectedUsers()
  

module.exports = { findLastActiveUsers, findInactiveYoungUsers, findOldActiveUsers, findOldInactiveUsers,  findTravelAndMusicUsers, findTechAndHealthNonSeniorUsers, findNonFinanceUsers, findSelectedUsers}; // On ne touche pas à cette ligne 😉
