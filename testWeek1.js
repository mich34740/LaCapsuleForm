#!/usr/bin/env node 
const tabUser = ["a1",null,"a2",null,"a3"];

let userInfo = {
    name: "jean",
    age: 25,
};

let userInfoPlus = {
    name: "jean paul",
    age: 25,
    adresse: "1 rue du pont"

};

function checkInput(test) {
    if (test===null) {
        return true;
    } else {
        return false;
    }
}

function getProperty(propObjet, objet) {
// console.log(objet[propObjet]);
    if (objet[propObjet]!==undefined) {
    return objet[propObjet];
 } else {
    return("not available");
 }
}

function configureSettings (objet) {
// console.log(objet[propObjet]);
    if (objet.theme==null) {
        objet.theme="light";
    } 
    if (objet.layout==null) {
        objet.layout="default";
    }
    return objet;
}

function cleanArray(tabClean) {
for (i=0; i<tabClean.length; i++) {
    if (tabClean[i]===null) {
        tabClean.splice(i,1);
        i--;
    }
}
return tabClean;
}

function mergeData(obj1, obj2) {
    for (const [key, value] of Object.entries(obj2)) {
        if (obj2[key]!==null) {
            obj1[key]=obj2[key];
        }
    }
    return obj1
}

//Conversions de Type

function conv() {
    //return "5"+3; //"53" '+' est considéré ici comme opérateur de concaténation, les autres signe '-*/' convertise en nombre
    //return parseFloat("123.45");
    //let a=0;
    //return Boolean(a); //false comme null, undefined, "", NaN
    let total = "7";
    total=parseInt(total)+5;
    return total;
}

function convertToBoolean(val) {
    //si val>0 true
    //sinon false
    return Boolean(val);
}   

function calculAire(height, width) {
    let area = parseInt(height) * parseInt(width);
    return area;
}

//Portée des variables

var x = 10;
function tester() {
  var x = 20;
  console.log(x);
}

//tester();
//console.log(x);

function compteur(num) {
    for (i=0; i<num; i++) {
        console.log(i);
    }
    console.log(i);
}    

function niveauExterieur() {
  var niveauUn = 'Je suis au premier niveau';
  var niveauDeux =""
  function niveauInterieur() {
    console.log(niveauUn);
    niveauDeux = 'Je suis au second niveau';
  }

  niveauInterieur();
  console.log(niveauDeux);
}
const users = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  { id: 4, name: "David", age: 20, email: "david@example.frcom" },
  { id: 5, name: "Eve", age: 28, email: "eve@example.com" }
];

function tabMap(tab) {
 return tab.map(x => x.name);
};
function tabFilter(tab) {
 return tab.filter(x => x.age > 25);
};

function tabReduce(tab) {
    const ages = tab.reduce((acc, x)=> acc+x.age,0);
    return (ages/tab.length);
};

function tabFind(tab) {
    return tab.find( x => x.name.startsWith("D"));
};

function tabFindIndex(tab) {
    return tab.findIndex( x => x.name === "Charlie");
};

function tabEvery(tab) {
    return tab.every( x => x.age>18);
};

function tabsome(tab) {
    return tab.some( x => x.email.indexOf("example")>0);
};

function tabFilterMap(tab) {
    let tabf = tab.filter(x => x.email.endsWith("example.com"))  
    return tabf.map(x => x.name);
};

function tabReduce2(tab) {
    
    return users.reduce((acc, user) => {
        let key;

        if (user.age >= 20 && user.age <= 25) {
            key = "20-25";
        } else if (user.age >= 26 && user.age <= 30) {
            key = "26-30";
        } else if (user.age >= 31) {
            key = "31+";
        } else {
            return acc; // ignore les autres cas si besoin
        }

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(user);

        return acc;
    }, {});
}

function tabTestMail(tab){
    const tabgroup = tabReduce2(tab);
    return Objet.values(tabgroup).every(group=> group.some(user => user.email.includes("example")));
}

console.log(tabTestMail(users));

//niveauExterieur();
//let test=undefined;
//console.log(checkInput(test));

//console.log(getProperty("adesse",userInfo));
//console.log(calculAire("200px","100px"));

//compteur(50);