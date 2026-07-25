#!/usr/bin/env node 
function fairDistribution(data) {
    let balanceArray = [];
    const total = data.reduce((sum, item) => sum + item.amount, 0);
    const average = total / data.length;
    const balances = data.map(person => ({
        name: person.name, 
        balance: person.amount - average
    }));
    const debtors = balances.filter(b => b.balance < 0);
    const creditors = balances.filter(b => b.balance > 0);
   
    
    for (let i = 0 ; i < debtors.length; i++) {
      const match = creditors.find(c => c.balance === Math.abs(debtors[i].balance));
        
        if (match) {
            balanceArray.push({
                name: debtors[i].name, 
                due: Math.abs(debtors[i].balance), 
                to: match.name
            });
        }
    };
    
    return balanceArray;
}


const expenses = [
   { name: 'Julia', amount: 500 },
   { name: 'John', amount: 300 },
   { name: 'Alex', amount: 400 },
   { name: 'Pamela', amount: 200 }
]
console.log(JSON.stringify(fairDistribution(expenses)));
// Expected result:
// [
//     { "name": 'John', "due": 50, "to": 'Alex' },
//     { "name": 'Pamela', "due": 150, "to": 'Julia' }
// ]