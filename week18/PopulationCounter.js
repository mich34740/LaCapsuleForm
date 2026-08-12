#!/usr/bin/env node 
function groupsCount(users){
    let count = {};
  
    const cities = [...new Set(users.map(user => user.city))];
    count = users.reduce((acc, user) => {
        acc[user.city] = (acc[user.city] || 0) + 1;
        return acc;
    }, {});
    return count;
}
 
const usersExample = [
    {name: 'Pierre', city: 'Paris'},
    {name: 'Paul', city: 'Lyon'},
    {name: 'Jacques', city: 'Paris'},
    {name: 'Julie', city: 'Grenoble'},
    {name: 'Quentin', city: 'Orléans'},
    {name: 'Emma', city: 'Grenoble'}
];
console.log(JSON.stringify(groupsCount(usersExample)));
// Expected: {"Paris":2,"Lyon":1,"Grenoble":2,"Orléans":1}