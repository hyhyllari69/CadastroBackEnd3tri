function atualizarNavbar() {
    const nome = localStorafe.getItem("nome cliente")
    const token = localStorage.getItem("token")

    const nav_login = document.getElementById("nav-login")
    const btn_user_info = document.getElementById("user-info")

    if(token && nome) {
        nav_login.style.display = "none"
        btn_user_info.style.display = "inline"
        btn_user_info.innerText= "Olá," + nome.split(" ")[0]
    }   else {
        nav_login.style.display = "inline"
        btn_user_info.style.display = "none"
    }
}

