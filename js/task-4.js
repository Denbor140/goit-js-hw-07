const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', userSubmit);

function userSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const userEmail = userForm.elements.email.value;
  const userPassword = userForm.elements.password.value;
  const userFormData = new FormData(userForm);
  const userData = Object.fromEntries(userFormData.entries());
  userData.email = userData.email.trim();
  userData.password = userData.password.trim();

  if (userEmail === '' || userPassword === '') {
    return alert('All form fields must be filled in');
  }
  console.log(userData);

  form.reset();
}

// АБО замість Object.fromEntries(userFormData.entries()) - створити об'єкт
//   const userData = {
//     email: userFormData.get('email'),
//     password: userFormData.get('password'),
//   };
// якщо треба trim() то потрібно сформувати новий об'єкт вже з ними
//  або після створення об'єкту додати значення trim()
