"use strict";
//task-1

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let result = {
    D
  };
  
  if (D === 0) {
    let x1 = -b / (2 * a);
    result.roots = [x1];
  }
  
  if (D > 0) {
    let x1 = (-b - Math.sqrt(D)) / (2 * a);
    let x2 = (-b + Math.sqrt(D)) / (2 * a);
    result.roots = [x1, x2];
  }

  return result;
}

function showSolutionsMessage(a, b, c ) {
  let result = getSolutions(a, b, c);
  //console.log(result);

  console.log(`\nВычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);

  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }

}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);
