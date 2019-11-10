//task-1 -----------------------------------------------------------

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

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
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

//----------------------------------------------------------------------------------------------
console.log('\n ---task-2--- \n')

function getAverageScore(data) {
  let count = {};
  let totalMark = 0;

  for (subject in data) {
    let averageMark = getAverageArray(data[subject]);
    count[subject] = averageMark;
    totalMark += averageMark;
  }

  count.average = totalMark / Object.keys(data).length;

  return count; //Общий ср.балл
}

function getAverageArray(arr) {
  let initialValue = 0;
  let totalScore = arr.reduce((a, b) => a + b) / arr.length;

  return totalScore; //Общий ср.балл попредметно
}

console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}));

//----------------------------------------------------------------------------------------
console.log('\n ---task-3--- \n');

function getPersonData(secretData) {
  let total = {};

  for (info in secretData) {
    if (info === 'aaa') {
      newInfo = 'firstName';
    } else {
      newInfo = 'lastName';
    }

    total[newInfo] = decoder(secretData[info]);
  }

  return total;
}

function decoder(info) {
  return info ? 'Эмильо' : 'Родриго';
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));
