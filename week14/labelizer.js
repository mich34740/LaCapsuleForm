#!/usr/bin/env node 
function mergeArrays(header, data) {
    let newArray = [];
    
    for (const info of infos) {
    const obj = {};

        for (let i = 0; i < labels.length; i++) {
            obj[labels[i]] = info[i];
        }

        newArray.push(obj);
  }

    return newArray
}


const labels = ["firstname", "age", "sex", "city"];
const infos = [
   ["Paul", 28, "male", "Paris"],
   ["Audrey", 35, "female", "Lyon"],
   ["Maxime", 33, "male", "Marseille"],
   ["Justine", 26, "female", "Nice"]
];
console.log(mergeArrays(labels, infos));
// Expected result:
// [
//     { firstname: 'Paul', age: 28, sex: 'male', city: 'Paris' },
//     { firstname: 'Audrey', age: 35, sex: 'female', city: 'Lyon' },
//     { firstname: 'Maxime', age: 33, sex: 'male', city: 'Marseille' },
//     { firstname: 'Justine', age: 26, sex: 'female', city: 'Nice' }
// ]