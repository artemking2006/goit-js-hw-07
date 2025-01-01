function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanOfColor = document.querySelector('.color');
const changeTheColorOfButton = document.querySelector('.change-color');

changeTheColorOfButton.addEventListener('click', function() {

    const randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;

    spanOfColor.textContent = randomColor;
});
