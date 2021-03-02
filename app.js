const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



function showError(input, message){
const formControl = input.parentElement;
formControl.className = "form-control error";
const small = formControl.querySelector('small');
small.innerText = message;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}


function isValidEmail (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


form.addEventListener('submit', function (e) {
e.preventDefault()

console.log("username");
console.log("password");
console.log("email");
console.log("password2");


if(username.value === ""){
showError(username, "You must enter a username!");
}else{
  showSuccess(username);
}

if(email.value === ""){
showError(email, "Email must contain @");
}else if (!isValidEmail(email.value)){


}else{
  showSuccess(email);
}

if(password.value === ""){
showError(password, "You must enter a Password")

}else{
  showSuccess(password);
}

if(password2.value === ""){
showError(password2, "Passwords must match!")
}else{
  showSuccess(password2);
}



});
