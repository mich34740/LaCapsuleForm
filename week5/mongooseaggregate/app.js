#!/usr/bin/env node 
const db = require('./database/setup') // On ne touche pas à cette ligne 😉


//En utilisant une requête d'agrégation, complétez la fonction countActiveAndInactive pour qu'elle affiche (dans un console.log) le nombre d'utilisateurs actifs (isActive: true) et le nombre d'utilisateurs inactifs (isActive: false). Cela vous permettra de vous familiariser avec l'opération $group et l'utilisation de conditions dans $match.

function countActiveAndInactive() {
    db.aggregate([
        {$group: {
                  _id: "$isActive",
                  count: {$sum: 1}
        }}
    ])
    .then(result => {console.log(`Utilisateur actifs ${result[0].count}`); 
                    console.log(`Utilisateur actifs ${result[1].count}`);})
    .catch(err => console.error(err));
}
//countActiveAndInactive()


//Complétez la fonction findRecentDate pour qu'elle affiche (dans un console.log) la date la plus récente à laquelle un utilisateur a été actif dans l'application. Cette requête introduit l'agrégat $max, utile pour trouver le maximum dans un ensemble de valeurs.

function findRecentDate() {
    db.aggregate([
        {$group: { _id: null, maxlastActive: {$max: "$lastActive"}}}
    ])
    .then(result => {console.log(result[0].maxlastActive);})
    .catch(err => console.error(err));
}

//findRecentDate();

//Complétez la fonction countUninterested pour qu'elle affiche (dans un console.log) le nombre d'utilisateurs qui n'ont enregistré aucun intérêt dans leur profil (interestTags). Cette requête vous introduit à l'utilisation de l'opérateur $size pour travailler avec des tableaux.

function countUninterested() {
    db.aggregate([
        {$match: {"interestTags": {$size: 0}}},
        {$group: {_id: null, count: {$sum: 1}}}
    ])
    .then(result => {console.log(result[0].count);})
    .catch(err => console.error(err));
}
//countUninterested()


//Complétez la fonction countActiveUsers pour qu'elle affiche (dans un console.log) le nombre total d'utilisateurs actifs (isActive: true) dans votre application sociale. Cette requête d'agrégation basique vous aidera à comprendre l'opération $group et l'utilisation de l'agrégat $sum.

function countActiveUsers() {
 db.aggregate([
        {$match: {isActive: {$eq: true}}},
        {$group: {_id: "$isActive",
                  count: {$sum: 1}
        }}
    ])
    .then(result => {console.log(`Utilisateur actifs ${result[0].count}`); 
                    })
    .catch(err => console.error(err));
}
//countActiveUsers()


//Complétez la fonction activeAverageAge pour qu'elle affiche (dans un console.log) l'âge moyen des utilisateurs actifs dans votre application. Cette requête vous introduit à l'agrégat $avg, une opération pratique pour obtenir des statistiques descriptives.

function activeAverageAge() {
 db.aggregate([
        {$match: {isActive: {$eq: true}}},
        {$group: {_id: "$isActiveAgeMoy", AgeMoyen: {$avg: "$age"}
        }}
    ])
    .then(result => {console.log(`Age moyen des utilisateurs actifs ${result[0].AgeMoyen} ans`); 
                    })
    .catch(err => console.error(err));
}
//activeAverageAge()


//Complétez la fonction uniqueInterestTags pour qu'elle affiche (dans un console.log) les tags d'intérêt uniques (interestTags) parmi les utilisateurs actifs. Cette requête vous familiarisera avec l'opération $unwind pour décomposer les tableaux, et $group pour regrouper les résultats.

function uniqueInterestTags() {
db.aggregate([
        {$match: {isActive: {$eq: true}}},
        {$unwind: "$interestTags"},
        {$group: {_id: "$interestTags"}}
    ])
    .then(result => {console.log(result); 
                    })
    .catch(err => console.error(err));
}
uniqueInterestTags()


//Complétez la fonction averageActivityLogs pour qu'elle affiche (dans un console.log) la moyenne de dailyActivityLogs pour tous les utilisateurs actifs au cours du dernier mois. Utilisez une requête d'agrégation pour grouper les utilisateurs actifs et calculer cette moyenne.

function averageActivityLogs() {

}
//averageActivityLogs()

//Complétez la fonction groupByAgeRange pour qu'elle affiche (dans un console.log) les utilisateurs actifs groupés par tranche d'âge (par exemple, moins de 20 ans, 20-40 ans, et plus de 40 ans) ainsi que le nombre d'utilisateurs dans chaque groupe.

function groupByAgeRange() {

}
//groupByAgeRange()


//Complétez la fonction countActiveUsersPerInterest pour qu'elle affiche (dans un console.log) le nombre d'utilisateurs actifs intéressés par chaque tag dans interestTags. Elle devra triez les résultats pour montrer les tags les plus populaires en premier.

function countActiveUsersPerInterest() {

}
//countActiveUsersPerInterest()


module.exports = { countActiveAndInactive, findRecentDate, countUninterested, countActiveUsers, activeAverageAge, uniqueInterestTags, averageActivityLogs, groupByAgeRange, countActiveUsersPerInterest }; // On ne touche pas à cette ligne 😉
