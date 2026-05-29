#!/usr/bin/env node 
function groupByFirstLetter(arr) {
    let obj = {};
    let arrFirstLetter=[...new Set(arr.flatMap(city => city[0]))];
 
    arrFirstLetter.forEach(element => {
        obj[element.toLowerCase()] =  arr.filter(city => city[0] === element);
    });

    return obj;
}

const result = groupByFirstLetter(['Berlin', 'Paris', 'Prague', 'Barcelone']);
console.log(result);
// Expected : { b: [ 'Berlin', 'Barcelone' ], p: [ 'Paris', 'Prague' ] }