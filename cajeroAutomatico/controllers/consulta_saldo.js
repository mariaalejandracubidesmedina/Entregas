const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const btnMenu = document.getElementById("btn-menu");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./login.html";
}


infoDiv.innerHTML = `
<div>
<p>Hola!  ${loggedUser.email} </p>
<p>tu saldo actual es : ${loggedUser.saldo} </p>
<div>`;



btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./login.html";
});

btnMenu.addEventListener("click", function () {  
  window.location.href = "./home.html";
});
