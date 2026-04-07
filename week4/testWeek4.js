#!/usr/bin/env node 
const tab1=[true, true, true, false];
const tab2=['test', 'test', 'test', 1];
const tab3=[1, 1, 1, 2];
const tab4=[10, 10, 10, 10];

const tab = [tab1, tab2, tab3, tab4];
const tabTest=[];
for (let j=0; j<tab.length; j++) {
    let test=true;
    const currentTab =tab[j];
    for (let i=0; i<currentTab.length-1; i++) {
        console.log(currentTab[i] +" "+currentTab[i+1]+" "+(!currentTab[i] === currentTab[i+1]));
        if (currentTab[i] !== currentTab[i+1]) {
            test = false;
            
            break; 
        }
    };
    console.log(currentTab)
    tabTest.push(test);
};
console.log(tabTest)