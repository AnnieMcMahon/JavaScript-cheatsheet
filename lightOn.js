const lightSwitch = document.getElementById('turn-on-off');
console.log(lightSwitch.innerHTML);
const bulbImage = document.getElementById('lightbulb');
console.log(bulbImage.src);

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
}
lightSwitch.addEventListener('click', () => toggleLight());