#!/usr/bin/env node 
function destructuringObj(obj) {
    let newObj = {}
    
    const {fn,ln,weight} = obj;

    newObj = {fn,ln,weight: weight+'Kg'}
        
    return newObj;
}

const objExemple = { fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.com', weight: 102 };
console.log(JSON.stringify(destructuringObj(objExemple)));
// Expected: { "fn": "Martin", "ln": "Harper", "weight": "102kg" }