function initCheckBirthday() {
  let birthday = document.getElementById('birthday').value;

  let result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  // код для задачи №1 писать здесь

  const now = +new Date(); //console.log(`Текущая дата: ${now}`);

  const date = +new Date(birthday); //console.log(`День рождения: ${date}`);

  const diff = now - date;

  const age = Math.floor(diff / (1000 * 3600 * 24 * 365.2425)); //console.log(`Возраст: ${age}`);
  //средняя продолжительность года по Григорианскомку календарю составляет 365,2425 суток

  return (age >= 18);
}

//--Задача 2------------------------------------------------------

function initPrintAnimalSound() {
  const animal = {
    sound: 'grrrr',
  };

  let result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
  // код для задачи №2 писать здесь

  if (animal.sound === undefined) {
    let sound = animal.sound;
	sound = null;
  }

  return (sound);

}

//--Задача 3------------------------------------------------------

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');

    const average = getAverageMark(marks);

    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {
  // код для задачи №3 писать здесь

  const average = marks.reduce((a, b) => Number(a) + Number(b)) / marks.length; // средняя оценка

  const roundeAverage = Math.round(average);

  return roundeAverage;
}
