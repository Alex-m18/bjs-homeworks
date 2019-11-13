"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
    // console.log(`Result: ${result}`);
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;

    let todayDate = new Date();
    let date2 = new Date(date);
    let differenceMonths = Math.floor(Math.abs(date2.getTime() - todayDate.getTime()) / (1000 * 3600 * 24 *30));

    if(isNaN(differenceMonths)){
      return(`Параметр "Срок ипотеки" содержит неправильное значение "${date2}". Проверьте правильность ввода даты`)
    } 
        let n = differenceMonths;              //Разница в месяцах
   
     
    let p = Number(percent);      
    if(isNaN(p)) {
      return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}". Разрешено, вводить только цифры и "."`)
      } else if((p) === 0) {
      return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}". Введите значение отличное от "0" и " "`)
      } else {
        p = p / 12 / 100;         //  Процентная ставка
      }

      if(isNaN(Number(amount))) {
        return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}". Разрешено, вводить только цифры и "."`)
      } else if(Number(amount) === 0) {
        return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}". Введите значение отличное от "0" и " "`)
      }

      if(isNaN(Number(contribution))) {
        return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}". Разрешено, вводить только цифры и "."`)
      } 

    let s = Number(amount) - Number(contribution);  

    let monthlyPayment = s * (p + p / (Math.pow(1 + p, n) - 1)); //Ежемесячный платёж

    let totalAmount = monthlyPayment * n;
    totalAmount = totalAmount.toFixed(2);                       //  Общая сумма платежа

    return totalAmount;
}



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;                     http://qaru.site/questions/475/how-do-you-check-for-an-empty-string-in-javascript


    // return (!name || /^\s*$/.test(name));
    if (!name || typeof name !== 'undefined' || /^\s, \0*$/.test(name)) {  /* Здесь: typeof name если переменная не была указа или
                                                                          имеет значение undefined
                                                                          ^- поиск с начала строки \s- совпадение с любым
                                                                          пробельным символом \0- совпадение с null
                                                                        *- любое количество раз $- до конца строки   */
      name = 'Аноним';
    }
    
return(`Привет мир! Меня зовут ${name}.`);

}
getGreeting(name);