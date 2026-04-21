#!/usr/bin/env node 
function switchKeys(obj) {
    let newCity = {};
    
    for (let key in obj) {
        newCity[obj[key]] = key;
    }
    return newCity;
};

const result = switchKeys({ Paris: 'city', France: 'country', Europe: 'zone' })
console.log(result)
// Expected: { city: 'Paris', country: 'France', zone: 'Europe' }
