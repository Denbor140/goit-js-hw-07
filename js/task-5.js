function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

body.style.transition = 'background-color 0.5s ease-in-out';

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;

  console.log(`randomColor: ${randomColor}`);
});
