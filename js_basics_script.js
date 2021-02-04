/*changing things in html*/
const TOMATO_CLASS = "tomato_class"; //const is upper case
const changeSpanColor = document.querySelector(".change-span-color");
const changeH4Color = document.querySelector(".change-h4-color");

function changeColor() {
  const currentColor = getComputedStyle(changeSpanColor).backgroundColor;
  let currentColorRgb = [0, 0, 0];
  let rgbSelector = 0;
  for (let i of currentColor) {
    if (i == ",") rgbSelector++;
    else if (i > "9" || i < "0") continue;
    else {
      currentColorRgb[rgbSelector] *= 10;
      currentColorRgb[rgbSelector] += i - "0";
    }
  }
  changeSpanColor.style.backgroundColor = `rgb(${currentColorRgb[0] - 30}, 
    ${currentColorRgb[1]}, 
    ${currentColorRgb[2]})`;
}

function addColorClass() {
  changeH4Color.classList.toggle(TOMATO_CLASS);
}

const timePrinter = document.querySelector(".js-get-time");

function printCurrentTime() {
  const currentDate = new Date();
  const min = currentDate.getMinutes();
  const hour = currentDate.getHours();
  const sec = currentDate.getSeconds();
  timePrinter.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  changeSpanColor.addEventListener("click", changeColor);
  changeH4Color.addEventListener("click", addColorClass);
  setInterval(printCurrentTime, 1000);
}

init();

/*adding chars in html*/
const CHARS = ["using +", "using ,", "using ``"];
document.write("<p>" + "We can write something like this " + CHARS[0]);
document.write("<br />", "Or like this ", CHARS[1]);
document.write(`<br />Or like this ${CHARS[2]}</p>`);
