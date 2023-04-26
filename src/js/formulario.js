const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const texto = document.getElementById("texto");


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'input-de-controle erro';
  const textoPequeno = formControl.querySelector('.erro');
  textoPequeno.innerText = message;
}


function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'input-de-controle sucesso';
}


function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'campo obrigatório');
  }
}


function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, "campo obrigatório");
    } else {
      showSuccess(input);
    }
  });
}


function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}



function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([nome, email, celular, texto]);
  checkEmail(email);
});