let bancoDeDados = [];
function add(){
    let usuario = document.getElementById("username").value 
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == - 1){
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuario Cadastrado com sucesso!")
        document.getElementById("username").value = null;
    }
    else{
        alert("esse usuario já foi cadastrado")
    }
}
function login(){
    let usuario = document.getElementById("user").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado");
    }
    else{
        alert("Bem vindo ao sistema!")
    }
}