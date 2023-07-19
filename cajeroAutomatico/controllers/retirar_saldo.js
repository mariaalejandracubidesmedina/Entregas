const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const ingresoSaldo = document.getElementById("ingreso-saldo");
const btnResta = document.getElementById("btn-resta");
const btnMenu = document.getElementById("btn-menu");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));



if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./login.html";
}

let saldo = loggedUser.saldo;
console.log(saldo);

btnResta.addEventListener("click", function () {  
  let nuevoSaldo = saldo - parseInt(ingresoSaldo.value);
  //saldo = nuevoSaldo;
  infoDiv.innerHTML += `
  <p> ${loggedUser.email} </p>
  <div>tu nuevo saldo es = ${nuevoSaldo}</div>`;
  localStorage.setItem("loggedUser",{ email: loggedUser.email, password: loggedUser.password, saldo: nuevoSaldo })
});

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./login.html";
});

/*btnMenu.addEventListener("click", function () {  
  window.location.href = "./home.html";
});*/

