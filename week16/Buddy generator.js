#!/usr/bin/env node 
function generateBuddies(arr) {
    let buddyList = [];
    for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    for (let i = 0; i < arr.length; i += 2) {
        buddyList.push([arr[i], arr[i + 1]]);
    }
 
    
    return buddyList
}


const list = ["Lebron", "Michael", "Shaquille", "Stephen", "Kobe", "Kevin", "Larry", "Scotty", "Charles", "Magic"]
const result = generateBuddies(list);
console.log(result);
// Expected example :
// [
//   [ 'Stephen', 'Shaquille' ],
//   [ 'Lebron', 'Scotty' ],
//   [ 'Magic', 'Kobe' ],
//   [ 'Kevin', 'Michael' ],
//   [ 'Larry', 'Charles' ]
// ]