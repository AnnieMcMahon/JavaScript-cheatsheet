function resetAll() {
  document.getElementById("demo").style.visibility = 'visible';
  document.getElementById('demo').style.display = 'block';
  document.getElementById('demo').style.color = 'black';
  document.getElementById('demo').style.fontWeight = 'normal';
}

function boredom() {
  let picToChange = document.getElementById("bored").src;
  if (picToChange.indexOf('bored.jpg') != -1) {
    document.getElementById("bored").src = "images/excited.jpg";
    document.getElementById("bored").title = "Click again if you dare";
  } else {
    document.getElementById("bored").src = "images/bored.jpg";
    document.getElementById("bored").title = "Wow, you must be really bored!";
  }
}

function loopExamples() {

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(`${j} times ${i} equal ${j * i}`);
    }
  }

  while (num !== 3) {
    num = Math.floor(Math.random() * 10)
  }

  do {
    x = x + i; console.log(x); i++
  } while (i < 5);

  for (let num of numArray) {
    console.log(num);
  }

  for (let char of myString) {
    console.log(char)
  }

  for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
  }

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 'stop') {
      console.log('The loop is over!');
      break;
    }
    if (myArray[i] === 'next') {
      console.log('This one is getting skipped.');
      continue;
    }
    console.log(myArray[i]);
  }
}

function objectExample() {
  const myObject = {
    keyOne: 'valueOne',
    keyTwo: 'valueTwo',
    methodOne() {
      console.log('message');
    }
  };
  let { keyOne, keyTwo } = myObject;
  console.log(myObject[keyOne]);
  delete myObject[keyTwo];
  myObject.keyThree = 'new value';
}

function classExample() {
  class Employee {
    constructor(name) {
      this._name = name;
      this._vacDays = 20;
    }
    get name() {
      return this._name;
    }
    get vacDays() {
      return this._vacDays;
    }
    takeVac(daysOff) {
      this._vacDays -= daysOff;
    }
    static generatePasscode() {
      return Math.floor(Math.random() * 10000)
    }
  }
  class Admin extends Employee {
    constructor(name, jobs) {
      super(name);
      this._jobs = jobs;
    }
    get jobs() {
      return this._jobs;
    }
    addJob(newJob) {
      this.jobs.push(newJob);
    }
  }
  const mrSmith = new Admin('Smith', ['AP', 'AR']);
  mrSmith.takeVac(5);
  mrSmith.addJob('Payroll');
  let code = Employee.generatePasscode();
  console.log(`Your passcode is ${code}`);
}