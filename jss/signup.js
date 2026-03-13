function togglePassword(){
let password = document.getElementById("password");

if(password.type === "password"){
password.type = "text";
}else{
password.type = "password";
}
}

function toggleConfirm(){
let confirmPassword = document.getElementById("confirmPassword");

if(confirmPassword.type === "password"){
confirmPassword.type = "text";
}else{
confirmPassword.type = "password";
}
}

document.getElementById("signupForm").addEventListener("submit", function(e){

let pass = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

if(pass !== confirm){
alert("Passwords do not match");
e.preventDefault();
}

});
