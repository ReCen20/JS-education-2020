let startProcessing = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value");
    
let inputExpensesValue = document.querySelectorAll(".expenses-item"),
    inputOptExpensesValue = document.querySelectorAll(".optionalexpenses-item"),
    buttonApproveExp = document.querySelector("button"),
    buttonApproveOptExp = document.querySelectorAll("button")[1],
    buttonCalculate = document.querySelectorAll("button")[2];

let money, time;

let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    chooseOptExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = Math.floor(appData.money / 30);
        alert(`Ваш бюджет на один день равен ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений","0");
            let percent = +prompt("Под какой процент", "0");

            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");
        if(typeof(items) === "string" && items != "") {
            appData.income = items.split(', ');
        }
        let optItem = prompt("Может быть что-нибудь еще?", "");
        if(typeof(optItem) === "string" && optItem != "") {
            appData.income.push(optItem);
        }
        alert("Способы доп зароботка:");
        appData.income.forEach(function(item, i) {alert(`${i + 1}. ${item}`);});
    }
};

appData.chooseIncome();
alert("В нашей программе следующие методы");
for(let method in appData) {
    alert(`${method}, `);
}

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "1234-12-12");
    let moneyString = prompt("Ваш бюджет на месяц", "0");
    money = +moneyString;

    while(isNaN(money) || moneyString == "" || moneyString === null) {
        moneyString = prompt("Ваш бюджет на месяц", "0");
        money = +moneyString;
    }
    
    appData.money = money;
    startProcessing.textContent = moneyString;
}

start();