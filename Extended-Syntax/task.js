"use strict";

function calculateQuadraticEquation(){
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a,b,c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = "+result;
}

function getResult(a,b,c){
  // код для задачи №1 писать здесь
  //return x;

  let x = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  console.log(d);
      
  if (d === 0) {
    x.push(-b / (2 * a));
  }
  else if (d > 0) {
    x.push((-b - Math.sqrt(d)) / (2 * a));
    x.push((-b + Math.sqrt(d)) / (2 * a));
  }

  return x;

} 

getResult();

function calculateAverageRating(){
  let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
  let averageMark = getAverageMark(marks);
  window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
  // код для задачи №2 писать здесь
    
  let average = marks;
    
  if (average.length > 5) {
    console.log('Внимание! Превышено количество введённых данных. Будут учтены только первые пять оценок.');
    average = average.slice(0, 5);
  }
    
  let averageMark = average.reduce((accumulator, average) => accumulator + average, 0)  / average.length;

  return averageMark;
}

getAverageMark();

function calculateDrinkTask(){
  let name = window.personName.value;
  let dateOfBirthday = new Date(window.dateOfBirthday.value);
  let drink = askDrink(name, dateOfBirthday);
  window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
  // код для задачи №3 писать здесь
  //console.log(result); 

  let today = new Date();
       
  let age = today.getFullYear() - dateOfBirthday.getFullYear();
    
  let result = (age >= 18) ? (`Не желаете ли олд-фэшн, ${name}?`) : (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    
  return result;
}

askDrink();
