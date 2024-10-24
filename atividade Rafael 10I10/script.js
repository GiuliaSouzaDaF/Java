let vetor = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100));
document.getElementById("iniciar").addEventListener("click", executar);

function executar() {
let n1 = parseInt(prompt("Digite o primeiro numero (0 a 24):"));
let n2 = parseInt(prompt("Digite o segundo numero (0 a 24):"));
if (n1 >= 0 && n1 < 25 && n2 >= 0 && n2 < 25) {
mostrarResultados(n1, n2);
}else{
alert("Valores inválidos!Tente novamente.");
 executar();
  }
}
 function mostrarResultados(n1, n2) {
 let soma = vetor[n1] + vetor[n2];
document.getElementById("resultado").innerHTML = `
 <p>Vetor: ${vetor.join(", ")}</p>
 <p>Soma das posições ${n1} e ${n2}: ${soma}</p>
 `; 
}