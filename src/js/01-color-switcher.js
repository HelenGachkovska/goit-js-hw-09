const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timeId = null;
stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', handlerClickStartBtn);
stopBtn.addEventListener('click', handlerClickStopBtn);

function setBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerClickStartBtn(ev) {
  timeId = setInterval(setBodyColor, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function handlerClickStopBtn(ev) {
  clearInterval(timeId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
}
