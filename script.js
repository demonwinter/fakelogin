var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p><br><center>Niepoprawne haslo!<br>Sprobuj ponownie.</center> </p>';
}