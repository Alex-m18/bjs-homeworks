'use strict';


//let arr = [1, 2, 3, 4, 5];
//  alert( arr.indexOf( 1.2 ) != -1 );



//task-1 -----------------------------------------------------------
console.log('Задача 1 "Оружие"');

class Weapon { //step 1
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.startDurability = this.durability;
  }

  takeDamage(damage) { //step 2
    if (damage > this.durability) { //Если ущерб > прочности, то прочность = 0
      this.durability = 0;
    } else {
      this.durability = this.durability - damage;
    }
  }

  getDamage() { //step 3 
    let condition = +this.durability / +this.startDurability * 100;
    if (condition >= 30) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() { //step 4
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 1);
const stickOfTheTempest = new Weapon('Посох Бури', 10, 300, 3);

console.log('Рука: ');
arm.takeDamage(20);
console.log(arm.getDamage()); //урон от удара
console.log(arm.durability); //прочность
console.log(bow.isBroken()); //исправность

console.log('Меч:');
sword.takeDamage(333);
console.log(sword.getDamage());
console.log(sword.durability);
console.log(sword.isBroken());

console.log('Секира:');
axe.takeDamage(700)
console.log(axe.getDamage());
console.log(axe.durability);
console.log(axe.isBroken());

//task-2 -----------------------------------------------------------
console.log('\nЗадача 2 "Переработка оружия"');

class Arm extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);
  }
}

class Bow extends Weapon {
  constructor() {
    super('Лук', 10, 200, 3);
  }
}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor() {
    super('Нож', 5, 300, 1);
  }
}

class Stick extends Weapon {
  constructor() {
    super('Посох', 8, 300, 2);
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StickOfTheTempest extends Stick {
  constructor() {
    super();
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
  }
}

const newArm = new Arm();
const newBow = new Bow();
const newSword = new Sword();
const newKnife = new Knife();
const newStick = new Stick();
const newLongBow = new LongBow();
const newAxe = new Axe();
const newStickOfTheTempest = new StickOfTheTempest();

console.log('\nРука:');
newArm.takeDamage(210);
console.log(newArm.getDamage()); //урон от удара
console.log(newArm.durability); //прочность
console.log(newArm.isBroken()); //исправность

console.log('Посох:');
newStick.takeDamage(211);
console.log(newStick.getDamage());
console.log(newStick.durability);
console.log(newStick.isBroken());

console.log('Секира:');
newAxe.takeDamage(610);
console.log(newAxe.getDamage());
console.log(newAxe.durability);
console.log(newAxe.isBroken());

//task-3 -----------------------------------------------------------
console.log('\nЗадача 3 "Школьный журнал"');

class StudentLog {
  constructor(name) {
    this.name = name;
    this.journal = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject){
    if(!(subject in this.journal)){
      this.journal[subject] = [];
    }
    switch(grade) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        this.journal[subject].push(grade);
        break;
      default:
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только целые числа от 1 до 5.`);
    }
    return this.journal[subject].length;
  }
  
  getAverageBySubject(subject) {
    let average = null;
    if (subject in this.journal) {
      for (let grade of this.journal[subject]) {
        average += grade;
      }
      average = average / this.journal[subject].length;
      return average;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let totalAverage = null;
    let gradeLength = null;
    for (let subject in this.journal) {
      gradeLength += this.journal[subject].length;
      for (let grade in this.journal[subject]) {
        totalAverage += this.journal[subject][grade];
      }
    }

    return (totalAverage / gradeLength).toFixed(2);
  }
}

const log = new StudentLog('Олег Иванов');
console.log(log.getName());

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'match'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'biology'));
console.log(log.addGrade(4, 'geometry'));
console.log(log.addGrade('25', 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(3, 'geometry');

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('math'));
console.log(log.getAverageBySubject('biology'));
console.log(log.getTotalAverage());
