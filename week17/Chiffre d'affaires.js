#!/usr/bin/env node 
function average(sales, year) {
    let average = 0
    
    const result = sales.filter(Sale => Sale.year===year);
    if (result.length === 0) return 0;
    const totalSales = result.reduce((sum, Sale) => sum + Sale.amount, 0);
    average = Math.round(totalSales/12);

    return average
}


const mySales = [{
        year: 2017,
        month: 'April',
        amount: 1500
    }, {
        year: 2019,
        month: 'January',
        amount: 3000
    }, {
        year: 2018,
        month: 'December',
        amount: 5000
    }, {
        year: 2020,
        month: 'August',
        amount: 500
    }, {
        year: 2018,
        month: 'March',
        amount: 2000
    }, {
        year: 2021,
        month: 'October',
        amount: 1700
    }, {
        year: 2019,
        month: 'July',
        amount: 800
    }, {
        year: 2019,
        month: 'July',
        amount: 800
    }, {
        year: 2020,
        month: 'February',
        amount: 2400
    }, {
        year: 2018,
        month: 'November',
        amount: 4300
    }
]
const calculation = average(mySales, 2018);
console.log(calculation); 
/// expected : 942