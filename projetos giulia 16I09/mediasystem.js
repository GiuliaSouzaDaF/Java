function volta(){
    window.location.href = "index.html"
}
function calculaMedia(){
    /*
    let numero = Number(prompt("digite um numero"));
    for(let sequencia = 0; sequencia <- numero; sequencia ++){
        alert(sequncia);
    }
   }
   */
  let qtdTotal = Number(prompt("digite a quantidade de atividades que deseja cadastrar!"));
  let map = Number(prompt("digite a media nescessaria para aprovacao!"));
  let media = 0;
  let totalPeso = 0;
  for(let qtdCad = 0;qtdCad < qtdTotal; qtdCad++){
    let atv = Number(prompt("digite a nota da atividade!"));
    let peso = Number(prompt("digite o peso da atividade!"));
    totalPeso += totalPeso + peso; //totalPeso = totalPeso + peso
    media += media + (atv*peso); //media = media + (atv * peso)
    
  }
  media /= totalPeso; //media = media/totalPeso
  let mensagem = media + ", portanto está reprovado!";
  if(media >=map){
    mensagem = media + ", portanto está aprovado!";
  }
  else if(media >=map - 0.5){
    mensagem = media + ", portanto está aprovado pelo conselho de classe";
  }
  alert(mensagem);
}
