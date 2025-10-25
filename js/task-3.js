const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
  const valueOutput = e.currentTarget.value.trim();
  console.log(e);

  if (valueOutput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = valueOutput;
  }
});
