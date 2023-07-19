const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const consultarSaldo = document.getElementById("consultar_saldo");
const ingresarSaldo = document.getElementById("ingresar_saldo");
const retirarSaldo = document.getElementById("retirar_saldo");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./login.html";
}


infoDiv.innerHTML = `
<div>
<p>¡Bienvenid@ ${loggedUser.email} !</p>
<p>Si deseas realizar alguna transaccion escoje en las siguientes opciones:</p>
<div>`;
console.log(loggedUser);




btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./login.html";
});
