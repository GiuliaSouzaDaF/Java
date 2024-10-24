
let idades = [14,22,34, 20,23,55,45];

function pesquisar(){
    // // console.log(idades);
    // let nome = prompt("digite seu nome: ");
    // console.log(nome);

    let numero = Number(prompt("qual numero voce quer pesquisar?"));
    let indice = idades.indexOf(numero);
    if(indice != -1){
        console.log("achei!! está na posição: "+indice);
    }
    else{
        console.log("valor nao encontrado")
    }
    // console.log(idades.indexOf(numero)) 
}
function cadastrar(){
    let numero = Number(prompt("digite o numero para cadastrar"));
    idades.push(numero)
   
    console.log(idades);
}
function mostrarTodos(){
    // console.log(idades);
    // alert(idades)
    // let i = 0
    // console.log(idades[i]);
    // i = 1
    // console.log(idades[i]);
    // i = 2
    // console.log(idades[i]);
    // i = 3
    // console.log(idades[i]);
    
    for(let i = 0; i <idades.length; i++){
        // console.log(idades[i]);
        document.getElementById('saida').innerHTML += idades[i] + "<br>"
        "<p> aluno: "+ idades[i] + "</p>"
    }
}