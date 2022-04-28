"use strict";
const transactionHistory = [];
const addTransaction = (amount, description) => {
    const objTransaction = { amount, description };
    transactionHistory.push(objTransaction);
};
addTransaction(1600, "Compras");
console.log(transactionHistory);
