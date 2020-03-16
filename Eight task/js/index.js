let budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    possibleInomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value");
    
let inputExpensesValue = document.querySelectorAll(".expenses-item"),
    inputOptExpensesValue = document.querySelectorAll(".optionalexpenses-item"),
    inputPossibleIncome = document.querySelector(".choose-income"),
    inputSum = document.querySelector(".choose-sum"),
    inputPercent = document.querySelector(".choose-percent"),
    inputCheckSavings = document.querySelector("#savings");

let buttonApproveExp = document.querySelector("button"),
    buttonApproveOptExp = document.querySelectorAll("button")[1],
    buttonCalculateDayBudget = document.querySelector(".count-budget-btn"),
    buttonStartProcessing = document.querySelector("#start");

let yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    monthSavings: 0,
    yearSavings: 0,
};

buttonApproveExp.setAttribute("disabled","");
buttonApproveOptExp.setAttribute("disabled", "");
buttonCalculateDayBudget.setAttribute("disabled", "");

buttonStartProcessing.addEventListener("click", function() {
    buttonApproveExp.removeAttribute("disabled");
    buttonApproveOptExp.removeAttribute("disabled");
    buttonCalculateDayBudget.removeAttribute("disabled");
});

//appData.chooseIncome();
//alert("В нашей программе следующие методы");
//for(let method in appData) {
//    alert(`${method}, `);
//}

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");
    let moneyString = prompt("Ваш бюджет на месяц", "0");
    money = +moneyString;

    while(isNaN(money) || moneyString == "" || moneyString === null) {
        moneyString = prompt("Ваш бюджет на месяц", "0");
        money = +moneyString;
    }
    appData.time = time;
    appData.money = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
}

start();

buttonApproveExp.addEventListener("click", function() {
    let expensesSum = 0;
    for(let i = 0; i < inputExpensesValue.length; i++) {

        let typeOfExpenses = inputExpensesValue[i].value,
            moneyForExpensesString = inputExpensesValue[++i].value,
            moneyForExpenses = +moneyForExpensesString;

        if((typeof(typeOfExpenses) != null) && (typeof(moneyForExpensesString) != null) &&
            (typeOfExpenses != "") && (moneyForExpensesString != "") &&
            !(isNaN(moneyForExpenses))) {

                appData.expenses[typeOfExpenses] = moneyForExpenses;
                expensesSum += moneyForExpenses;
        }
    }
    expensesValue.textContent = expensesSum;
});

buttonApproveOptExp.addEventListener("click", function(){
    for(let i = 0; i < inputOptExpensesValue.length; i++) {

        let typeOfExpenses = inputOptExpensesValue[i].value;
        if(typeOfExpenses != "") {
            appData.optionalExpenses[i] = typeOfExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

buttonCalculateDayBudget.addEventListener("click", function () {
    appData.moneyPerDay = (appData.money - +expensesValue.textContent) / 30;
    daybudgetValue.textContent = Math.floor(appData.moneyPerDay);
    if(appData.moneyPerDay <= 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
});

inputPossibleIncome.addEventListener("input", function () {
    let items = inputPossibleIncome.value;
    if(items != "") {
        appData.income = items.split(', ');
    }

    possibleInomeValue.textContent = appData.income;
});

inputCheckSavings.addEventListener("click", function() {
    if(appData.savings === false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

inputSum.addEventListener("input", function() {
    if((appData.savings === true) && (inputSum.value != "") && ( !isNaN(+inputSum.value)) && 
    (inputPercent.value != "") && ( !isNaN(+inputPercent.value))){

        appData.monthSavings = inputSum.value/100/12*inputPercent.value;
        appData.yearSavings = inputSum.value/100*inputPercent.value;

        monthSavingsValue.textContent = Math.floor(appData.monthSavings);
        yearSavingsValue.textContent = Math.floor(appData.yearSavings);
    }
    
});

inputPercent.addEventListener("input", function() {
    if((appData.savings === true) && (inputSum.value != "") && ( !isNaN(+inputSum.value)) && 
    (inputPercent.value != "") && ( !isNaN(+inputPercent.value))){

        appData.monthSavings = inputSum.value/100/12*inputPercent.value;
        appData.yearSavings = inputSum.value/100*inputPercent.value;

        monthSavingsValue.textContent = Math.floor(appData.monthSavings);
        yearSavingsValue.textContent = Math.floor(appData.yearSavings);
    }
    
});



