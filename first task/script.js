"use strict";

let money = +prompt("Ваш бюджет на месяц", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1234-12-12");
let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let typeOfExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let moneyForExpenses = +prompt("Во сколько обойдется?", "0");

appData.expenses[typeOfExpenses] = moneyForExpenses;

alert(`Ваш бюджет на один день равен ${(appData.money - appData.expenses[typeOfExpenses]) / 30}`);


