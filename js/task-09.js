
const body = document.body;
const swapBtnEl = document.querySelector('.change-color');
const titleColor = document.querySelector('.color');
swapBtnEl.addEventListener('click' , getRandomHexColor);
function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}