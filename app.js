let password = document.getElementById('password');
let togglePassword = document.querySelector('.input__icon');

function showHide() {
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    togglePassword.setAttribute('name', 'eye-off-outline');
  } else {
    password.setAttribute('type', 'password');
    togglePassword.setAttribute('name', 'eye-outline');
  }
}
