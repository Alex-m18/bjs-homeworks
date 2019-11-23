const localeTime = () => new Date().toLocaleTimeString('ru-RU', {
  timeZone: 'Europe/Moscow',
  hour: 'numeric',
  hour12: false,
  minute: 'numeric'
});

const setAlarm = (alarmTime, callback) => (currentTime) => {if (currentTime === alarmTime) callback();};

function setDailyRhythm(wakeUpTime, bedTime) {
  const currentTime = localeTime();

  const goodMorning = () => console.log(`Доброе утро, Вася. Уже ${currentTime}`);
  const goodNight = () => console.log(`Спокойной ночи, Вася! Уже ${currentTime}`);
  
  const checkWakeUpTime = setAlarm(wakeUpTime, goodMorning);
  const checkBedTime = setAlarm(bedTime, goodNight);

  checkWakeUpTime(currentTime);
  checkBedTime(currentTime);

  setTimeout(setDailyRhythm, 10000, wakeUpTime, bedTime);
}

console.log('Program started')
console.log('Current local time: ' + localeTime());

setDailyRhythm('00:24', '00:25');
