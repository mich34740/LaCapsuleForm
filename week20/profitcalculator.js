#!/usr/bin/env node 
function findProfit(data) {
    let profit = [];

    profit = data.map((crypto, index) => {
    if (index === 0) {
      return {
        day: crypto.day,
        amount: Number(crypto.amount.toFixed(2)),
        gain: Number((crypto.gain ?? 0).toFixed(2))
      };
    }
    const previousAmount = data[index - 1].amount;
    const gain = ((crypto.amount - previousAmount) / previousAmount) * 100;
    return {
      day: crypto.day,
      amount: Number(crypto.amount.toFixed(2)),
      gain: Number(gain.toFixed(2))
    };
    
})
return profit;
};


const cryptomonnaies = [
   { day: '2021/09/10 00:00:00', amount: 3209.82, gain: -6.14 },
   { day: '2021/09/11 00:00:00', amount: 3266.87 },
   { day: '2021/09/12 00:00:00', amount: 3403.75 },
   { day: '2021/09/13 00:00:00', amount: 3291.77 },
   { day: '2021/09/14 00:00:00', amount: 3615.13 }
]
console.log(findProfit(cryptomonnaies));
// Expected result:
// [
//     { day: '2021/09/10 00:00:00', amount: 3209.82, gain: -6.14 },
//     { day: '2021/09/11 00:00:00', amount: 3266.87, gain: 1.78 },
//     { day: '2021/09/12 00:00:00', amount: 3403.75, gain: 4.19 },
//     { day: '2021/09/13 00:00:00', amount: 3291.77, gain: -3.29 },
//     { day: '2021/09/14 00:00:00', amount: 3615.13, gain: 9.82 }
// ]