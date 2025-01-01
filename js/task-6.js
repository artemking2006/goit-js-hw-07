function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

  const boxesContainer = document.getElementById('boxes');

  boxesContainer.innerHTML = '';


  const boxes = [];


  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '10px';
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
   const amount = parseInt(input.value, 10);

   if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
   } else {
    alert('Please enter a number between 1 and 100');
   }
});

destroyButton.addEventListener('click', destroyBoxes);
