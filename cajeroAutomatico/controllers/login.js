const inputEmail = document.getElementById("email-input");
const inputpassword = document.getElementById("password-input");
const Btnlogin = document.getElementById("btn-login");

const users = [
  { email: "Mali", password: "1234", saldo: 200 },
  { email: "Gera", password: "5678", saldo: 290 },
  { email: "Maui", password: "9011", saldo: 67 },
];

Btnlogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = inputEmail.value;
  let password = inputpassword.value;
  //console.log(email);
  // console.log(password);

  let loggedUser = users.find(
    (element) => element.email === email && element.password === password
  );
  console.log(loggedUser);

  if (loggedUser) {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href="./home.html";
  } else {
    alert("El usuario o contraseña son incorrectos");
  }
  
});
