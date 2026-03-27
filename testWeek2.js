#!/usr/bin/env node 
const listeChaine =["Hello World","End of the story","Start a new chapter2","inside","999 is the end"];

//^ recherche en début de chaine
function findBegin(tabChaine, regex) {
    //const pattern=/^Hello+/;
    //const result = tabChaine.find(chaine => /^Hello+/.test(chaine));
    const result = tabChaine.find(chaine => regex.test(chaine));
    return result;
};
//console.log(findBegin(listeChaine,/^Hello+/));

//Recherche en fin de chaine
function sommeEnd(tabChaine) {
    const pattern=/end$/;
    const result = tabChaine.some(chaine => pattern.test(chaine));
    return result;
}

//Recherche en début ou fin de chaine
function filterBegEnd(tabChaine, regex) {

    const result = tabChaine.filter(chaine => regex.test(chaine));
    return result;
};

//console.log(sommeEnd(listeChaine));

//Recherche mot entier au début d'une chaine
//console.log(findBegin(listeChaine,/^Start\b/));

//Recherche mot entier au milieu d'une chaine
//console.log(findBegin(listeChaine,/^Start\b/));

//Recherche de mot contenant une partie d'une chaine
//console.log(findBegin(listeChaine,/\Binside\B/));

//Recherche des chaines commençant ou ce terminant par un chiffre
//console.log(filterBegEnd(listeChaine,/^[0-9]|[0-9]$/g));

//Recherche mot entier dans une chaine
//console.log(filterBegEnd(listeChaine,/.\bnew\b/g));

//console.log(filterBegEnd(listeChaine,/new(?= )/gi));

//CAPTURE
//Recherche et capture
function filterGroup(chaine, regex, ngroup) {
    const match = chaine.match(regex);
    //console.log(ngroup.[1]);
    if (Array.isArray(ngroup)) {
        let result=[];
        for (i=0; i<ngroup.length; i++) {
            if (match && match.groups[ngroup[i]]) {
                result.push(match.groups[ngroup[i]]);
            }
        }
        return result;
    } else {
        if (match && match.groups) {
            return match.groups[ngroup];
        }
    }
};

//function filterGroupTab(chaine[], regex[], ngroup[]) {
//    let result=[];
//    for (let i=0; i<regex.length; i++) {
//        const match = chaine.match(regex[i]);
//        console.log(match);
//        if (match && match.groups[ngroup[i]]) {
//            let resultChaine={};
//            resultChaine={};
//            for (i=0; i<ngroup.length; i++) {
//                if (match && match.groups[ngroup[i]]) {
//                    result.push(match.groups[ngroup[i]]);
//                }
 //           }
//            result.push(match.groups[ngroup[i]]);
//        }
//    }   
//    return result;
//};

//const groupChaine =[ "Transaction ID: 4523 completed by user Sarah.",
//"Login failure from user: jacob_92.","User Mike initiated transaction ID: 7891."];

//console.log(filterGroup(groupChaine[0],/user[:\s]+(?<name>\w+)/i,"name"));
//console.log(filterGroup(groupChaine[2],/ID: (?<id>\d+)/i,"id"));
//console.log(filterGroup(groupChaine[1],/^Login\s+(?<Login>\w+).*?user[:\s]+(?<name>\w+)/i,["Login","name"]));
//console.log(filterGroupTab(groupChaine,[/^Login\s+(?<Login>\w+).*?user[:\s]+(?<name>\w+)/i,/ID: (?<id>\d+)/i],["Login","name","id"]));

//Assertions
//const groupChaine = ["Price is $100 test", "200 euros", "Error 404: Not Found", "Transaction ID: 12345", "Username: user123"];
//console.log(groupChaine.filter(chaine => /\d+(?=\seuros)/i.test(chaine)).map(str => str.replace(/\s*euros/,"")));
//console.log(groupChaine.filter(chaine => /\d+(?!\$)/.test(chaine)));
//console.log(groupChaine.filter(chaine => /(?<=\$)\d+/.test(chaine)));
//console.log(groupChaine.filter(chaine => /(?<!ID: )\b\d+\b/.test(chaine)));
//console.log(groupChaine.filter(chaine => /(?<=\$)\d+(?=\s\w)/.test(chaine)));
//console.log(groupChaine.filter(chaine => /(?<=Username:\s)/.test(chaine)).map(str => str.replace(/Username: /,"")));

//Référence arrière

const groupChaine = ["Hello hello how are you?","bye bye see you soon","happy to hello to meet you","no repetition here","what  what is  is this  this"];

console.log(groupChaine.filter(chaine => /\b(\w+)\s\1\b/.test(chaine)));
console.log(groupChaine.filter(chaine => /\b(\w+)\s+\1\b/.test(chaine)));
console.log(groupChaine.filter(chaine => /\b(\w+)\s\1\b/i.test(chaine)));
console.log(groupChaine.filter(chaine => /\b(\w+)\s+\1\b/gi.test(chaine)).map(chaine => chaine.replace(/\b(\w+)\s+\1\b/gi,"$1")));
console.log(groupChaine.filter(chaine => /\b(\w+)\W+\1\b/i.test(chaine)));