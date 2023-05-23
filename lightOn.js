const lightSwitch = document.getElementById('turn-on-off');
const bulbImage = document.getElementById('lightbulb');

const toggleLight = () => {
  if (lightSwitch.innerHTML === 'Turn on the light') {
    bulbImage.src = 'images/pic_bulbon.gif';
    lightSwitch.innerHTML = 'Turn off the light';
    lightSwitch.style.backgroundColor = 'green';
  } else {
    bulbImage.src = 'images/pic_bulboff.gif';
    lightSwitch.innerHTML = 'Turn on the light';
    lightSwitch.style.backgroundColor = 'blue';
  }
};

lightSwitch.addEventListener('click', () => toggleLight());