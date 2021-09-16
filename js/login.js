var usuario = document.login.usuario.value;
console.log(usuario);
var password = document.login.password.value;
console.log(password);

function login(usuario, password) {
  if (usuario == "admin" && password == "admin") {
    window.location = "deudas.html";
  }
  else {
    alert("Datos Incorrectos");
    window.location = "index.html";
  }
}

