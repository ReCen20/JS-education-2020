"use strict";

let money, time;

function start() {
    let moneyString = prompt("Ваш бюджет на месяц", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD", "1234-12-12");
    money = +moneyString;

    while(isNaN(money) || moneyString == "" || moneyString === null) {
        moneyString = prompt("Ваш бюджет на месяц", "0");
        money = +moneyString;
    }
}

start();

let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let typeOfExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
        let moneyForExpenses = prompt("Во сколько обойдется?", "0");
    
        if((typeof(typeOfExpenses) != null) && (typeof(moneyForExpenses) != null) &&
        (typeOfExpenses != "") && (moneyForExpenses != "")) {
            console.log("done");
            appData.expenses[typeOfExpenses] = moneyForExpenses;
        }
        else {
            i--;
        }
    }    
}

function chooseOptExpenses () {
    for(let i = 1; i < 4; i++) {
        let typeOfExpenses = prompt("Введите опциональную статью расходов в этом месяце", "");
        console.log(typeof(typeOfExpenses) != null);
        console.log(typeof(typeOfExpenses));
        if((typeof(typeOfExpenses) === "string") && (typeOfExpenses != "")) {
            console.log("done");
            appData.optionalExpenses[i] = typeOfExpenses;
        }
        else {
            i--;
        }
    }
}

chooseOptExpenses();

/*let i = 0;

do {
    let typeOfExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
    let moneyForExpenses = prompt("Во сколько обойдется?", "0");
    if((typeof(typeOfExpenses)=== "string") && (typeof(typeOfExpenses) != null) &&
    (typeof(moneyForExpenses) != null) && (typeOfExpenses != "") && (moneyForExpenses != "")) {
        console.log("done");
        appData.expenses[typeOfExpenses] = moneyForExpenses;
    }
    else {
        i--;
    }
    i++;
} while (i < 2);

while (i < 2) {
    let typeOfExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
    let moneyForExpenses = prompt("Во сколько обойдется?", "0");
    if((typeof(typeOfExpenses)=== "string") && (typeof(typeOfExpenses) != null) &&
    (typeof(moneyForExpenses) != null) && (typeOfExpenses != "") && (moneyForExpenses != "")) {
        console.log("done");
        appData.expenses[typeOfExpenses] = moneyForExpenses;
    }
    else {
        i--;
    }
    i++;
}*/

function detectDayBudget () {
    appData.moneyPerDay = Math.floor(appData.money / 30);

    alert(`Ваш бюджет на один день равен ${appData.moneyPerDay}`);
}

function detectLevel () {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}



function checkSavings () {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений","0");
        let percent = +prompt("Под какой процент", "0");

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
    }
}

checkSavings();

