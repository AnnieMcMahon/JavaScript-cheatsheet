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
    set newJob(job) {
      this._jobs.push(job);
    }
    printJobs() {
      console.log(this.jobs);
    }
  }
  const mrSmith = new Admin('Smith', ['AP', 'AR']);
  mrSmith.takeVac(5);
  mrSmith.newJob = 'Payroll';
  mrSmith.printJobs();

  let code = Employee.generatePasscode();
  console.log(`Your passcode is ${code}`);
  console.log(mrSmith);
}

//Function declaration 
//(userName is a parameter; 'friend' is a default value)
function welcomeMessage(userName = 'friend') {
  console.log(`Hello, ${userName}! Nice to meet you!`);
};

//Function call ('Annie' is an argument)
welcomeMessage('Annie');

//Return statement
function myArea(a, b) {
  return a * b;
};
let myTotal = myArea(5, 4);

//Helper function
function myVolume(a, b, c) {
  return myArea(a, b) * c;
}

//Anonymous function expression stored in a variable
const myArea = function(a, b) {
  return a * b;
}

//Arrow function with two parameters
const myArea = (a, b) => {
  return a * b;
}

//Arrow function with one parameter
const mySquareArea = a => {
  return a * a;
}

//Arrow function with no parameter
const myMessage = () => {
  console.log('Hello!');
}

//Consise arrow notations
const myArea = (a, b) => a * b;
const truthOrDare = choice => choice === 't' ? "truth" : "dare";







