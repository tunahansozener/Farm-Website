
const email = document.querySelector("#email")
const username = document.querySelector("#name")
const password = document.querySelector("#psw")
const password2 = document.querySelector("#psw-repeat")

Register()
function Register(){
    email = document.getElementById("email")
    username = document.getElementById("name")
    password = document.getElementById("psw")
    password2 = document.getElementById("psw-repeat")
}

if (email.length === 0) {
    alert("email boş olamaz")
    if (email != true) {
        alert("bu mail adresi kullanılıyor")
    }
}

if (username.length === 0) {
    alert("kullanıcı adı boş olamaz")
    if (username != true) {
        alert("username is by taken")
    }
}

if (password.length === 0) {
    alert("password boş olamaz")
    if (password != true) {
        alert("password is not suitable")
    }
}
if (password2.length === 0) {
    alert("password boş olamaz")
    if (password2 != password) {
        alert("şifreler aynı değil")
    }
}