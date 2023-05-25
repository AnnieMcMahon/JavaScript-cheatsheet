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

export { resetAll, boredom };
