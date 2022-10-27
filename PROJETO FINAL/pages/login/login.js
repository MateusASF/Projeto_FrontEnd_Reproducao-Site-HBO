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


function clickMenu(){
    menuLateral.style.display = menuLateral.style.display == 'block' ? 'none' : 'block';
}

function closeMenu(){
    menuLateral.style.display = 'none';
}


