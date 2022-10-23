function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "mateus" && senha == "sergio"){
        alert('Sucesso');
        location.href = "/PROJETO FINAL/index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}