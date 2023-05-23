function resetAll() {
  document.getElementById("demo").style.visibility='visible';
  document.getElementById('demo').style.display='block';
  document.getElementById('demo').style.color='black';
  document.getElementById('demo').style.fontWeight='normal';
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