function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "mateusAdm" && senha == "mateus"){
        alert('Sucesso');
        location.href = "../Mateus/mateusAugusto.html";
    }
    else if(login == "sergioAdm" && senha == "sergio"){
        alert('Sucesso');
        location.href = "../Sergio/sergio.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }
}


function clickMenu(){
    menuLateral.style.display = menuLateral.style.display == 'block' ? 'none' : 'block';
}

function closeMenu(){
    menuLateral.style.display = 'none';
}


