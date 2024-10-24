let convidados = [];
function add(){
    let pessoa = document.getElementById("txt").value;
    let existe = false;
    for (let item of convidados){
        if(item.toLowerCase() == pessoa.toLowerCase()){
            existe = true;
            break;
    }
}
if(existe == false){
    convidados.push(pessoa);
    document.getElementById("lista").innerHTML = convidados;
}else{
alert("esta pessoa já esta cadastrada")
    }
}
function edit(){
    let pessoa = document.getElementById("txt").value;
   for(let pos = 0; pos < convidados.length; pos++){
    if(convidados[pos].toLowerCase() == produto.toLowerCase()){
    
    }
    if(item.toLowerCase() == pessoa.toLowerCase()){
        item = prompt("digite o novo valor para" +item);
    alert(convidados);
        break;
    }
   }
   document.getElementById("lista").innerHTML = convidados;
}
function remove(){
    let pessoa = document.getElementById("txt").value;
    let existe = -1;
    for(let item of convidados){
        if(item.toLowerCase() == produto.toLowerCase()){
        existe = convidados.indexOf(item);
        break;
        }
    }
    if(existe== -1){
        alert("o item nao existe na lista");
    }else{
        convidados.splice(existe, 1);
    document.getElementById("lista").innerHTML = convidados;
    }
    }
   
