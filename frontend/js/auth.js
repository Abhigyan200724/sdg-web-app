const API =
"https://sdg-web-app.onrender.com/api/auth";


// REGISTER
const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const data = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value
};

const response =
await fetch(
`https://sdg-web-app.onrender.com/api/auth/register`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result =
await response.json();

alert(result.message);

window.location.href =
"login.html";


});
}



// LOGIN
const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const data = {

email:
document.getElementById("email").value,

password:
document.getElementById("password").value
};

const response =
await fetch(
`https://sdg-web-app.onrender.com/api/auth/login`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result =
await response.json();

if(result.token){

localStorage.setItem(
"token",
result.token
);

alert("Login Success");

window.location.href =
"./user/dashboard.html";
}

});
}
