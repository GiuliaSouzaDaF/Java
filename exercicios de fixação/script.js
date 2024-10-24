function contadorDeNum(){
    let n = Number(prompt("digite um numero!"));
    let i = 1;
    while( i <= n){
    alert(i);
    i ++;
    }
}
function somarAteZero(){
    let n = Number(prompt("digite um numero!"));
    let soma =  0;
    while( n != 0);{
        soma = soma + n;
        n = Number(prompt("digite outro numero!"));
    }
    alert(soma);
}
function mediaDeNum(){
    let qtdTotal = Number(prompt("digite a quantidade de numeros"));
    let soma = 0;
    for(let qtdCad = 0;qtdCad < qtdTotal; qtdCad++){
        let numero = Number(prompt("digite o numero"));
        soma = soma + numero;
    }
    let media = soma/qtdTotal;
    alert(media); 
}
function fatDeNum(){
    let n = Number(prompt("digite o numero para calcular o fatorial"));
    let r = t;
    for(let i = t.i <= n; i++;){
        r <= r * i;
    }
    alert(r);
}
function tabDeMultip(){
    let n = Number(prompt("digite um numero"));
    let tabela = "";
    for(let mult = 1; mult <=10; mult ++){
        tabela += "\n"+n+" x "+mult+ "="+(n*mult);
    }
    alert(tabela);
}
function numParN(){
    let n = Number(prompt("digite um numeroo"));
    let pares = "";
    for (let par = 1; par <=n; par++){
        if(par % 2 == 0){
         pares += "\n"+par;
        }
    }
    alert(pares)
}
function contarAte(){
    let n = Number(prompt("digite um numeroo"));
    let passo = Number(prompt("digite o passo"));
    let i = 1;
    while(i < n){
        alert(i);
        i += passo;
    }
}
function numImparN(){
    let n = Number(prompt("digite um numeroo"));
    let impares = "";
    for (let impar = 1; impar <=n; impar++){
        if(impar % 2 != 0){
            impares += "\n"+impar;
        }
    }
    alert(impares)
}
function verificMultNum(){
    let n1 = Number(prompt("digite um numeroo"));
    let n2 = Number(prompt("digite um possivel multiplo"));
    if(n2 % n1 == 0){
        alert(n2+"e multiplo de "+n1);
     }
     else{
        alert(n2+"nao e multiplo de "+n1);
     }
}
function verificNumPrimo(i){
    let qtdDivisores = 0;
    for( let ant = 1; ant<=i; ant++){ 
        if(i % ant ==0){
            qtdDivisores ++
        }
    }
            if(qtdDivisores==2){
                return true;
            }else{
            return false;   
        }
    }
 
 function ListaPrimos(){
    let n = Number(prompt("digite um numero"));
    let armazenamento =""
    for(let i = 1; i<=n; i++){
    if(verificNumPrimo(i) == true){
        armazenamento+=(i+ " e primo\n")
    }
    else{
        armazenamento+=(i+ " nao e primo\n")
     }
    }
    alert(armazenamento)
 }
