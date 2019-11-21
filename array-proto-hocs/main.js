'use strict';

console.log('Задача № 3.1 Прототип массива, функции высшего порядка. Ускорение долгих вычислений\n');


function compareArrays(arr1, arr2) {
  return (Array.from(arr1).length === Array.from(arr2).length) &&
    (Array.from(arr1).every(
      (value, index) => value === Array.from(arr2)[index]
    ));
}

function memoize(fn, limit) {
  if (typeof (memoize.results) == 'undefined') {
    memoize.results = []; //   инициализируем пустой массив
    memoize.results.push({
      args: [0, 0],
      result: 0
    }); // инициализируем начальный объект массива для дальнейшей ссылки на них
  }

  return function () { //возвращаем функцию
    let arr = Array.from(arguments); //запоминаем аргументы переданные в эту функцию

    let element = memoize.results.find(x => compareArrays(Array.from(x.args), arr)); //ищем первый запомненный элемент

    if (!(element === undefined)) {
      return `${element.result} - значение из памяти;`
    } else {
      let res = fn.apply(this, arr); //преобразуем массив в перечень аргументов для функции
      memoize.results.push({
        args: arr,
        result: res
      });
      if (memoize.results.length > limit) {
        memoize.results.shift();
      }

      return `${res} - значение вычислено;`
    }
  }
}

function sum() {
  return Array.from(arguments).reduce(
    function (sum, current) {
      return sum + current;
    });
}

const mSum = memoize(sum, 3); // 3 результата хранятся в памяти

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
console.log(sum(1, 2, 8, 4, 5)); //проверяем sum: 20
console.log(mSum(1, 2, 3, 4));
console.log(mSum(1, 2, 3, 4, 5));
console.log(mSum(1, 2, 3, 4, 5));
console.log(mSum(1, 2, 3, 4, 5, 6));
console.log(mSum(1, 2, 3, 4));
console.log(mSum(1, 2, 3, 4, 5));
console.log(mSum(1, 10, 3, 4, 5));
console.log(mSum(1, 2, 3, 4, 5));
console.log(mSum(1, 2, 3, 4, 5));
