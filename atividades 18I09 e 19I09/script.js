function executar1008(){
    let id, horas, valorHora, salario 
    // let id
    // let valorHora
    // let salario
    id = Number(prompt("digite seu id: "));
    // id = Number('45');
    // id = 45
    horas = Number(prompt("quantas horas voce trabalhou?"));
    valorHora = Number(prompt("quanto voce ganha por hora?"));
    
    salario = horas * valorHora 
    alert("ID: "+ id + "\nsalario: R$"+salario.toFixed(2));

}
function executar1009(){
    // comissao = vendas * 15/100 
    let nome, salarioFixo,totalVendas, comissao, totalReceber
    nome = (prompt("digite o nome do vendedor"));
    salarioFixo = Number(prompt("digite seu salario fixo: "));
    totalVendas = Number(prompt("digite o total de vendas no mes"));
    comissao = totalVendas*15/100
    totalReceber = comissao + salarioFixo


    alert("nome: "+nome+"\ntotalReceber: R$"+totalReceber.toFixed(2));
}
function executar1038(){
    let codigo,qtd, preco, valor
    codigo = Number(prompt("digite o codigo:"));
    qtd = Number(prompt("digite a quantidade:"));
    preco
    if(codigo == 1){
        preco = 4
    }else if(codigo== 2){
        preco = 4.5
    }else if(codigo== 3){
        preco = 5
    }else if(codigo = 4){
        preco = 2
    }else if(codigo==5){
        preco = 1.5
    }else{
        alert('digita o codigo direito ai o')
    }
    valor = preco + qtd
    alert('total : R$ '+valor.toFixed(2));
    
}
function executar1050(){
    let codigo, ddd
    codigo = Number(prompt("digite o codigo: "));
    ddd = codigo
    if(codigo ==61){
        ddd= Brasilia
    }else if(codigo ==71){
        ddd= Salvador
    }
    if(codigo ==11){
        ddd= SaoPaulo
    }else if(codigo ==21){
    ddd= RioDeJaneiro
    }
    if(codigo ==32){
        ddd= JuizDeFora
    }else if(codigo ==19){
        ddd=Campinas
    }
    if(codigo ==27){
        ddd= Vitoria
    }else if(codigo ==31){
        ddd= BeloHorizonte
    }else{
        alert('DDD nao cadastrado');
    }
}
    function executar1142(){
        let cont = 1
        let contagemPUMs = 0
        let limitePUMs = Number(prompt("quantos PUMs?"))
        let acumulador  = ""
        while(contagemPUMs < limitePUMs){
        if(cont % 4 != 0){
            console.log(cont)
            acumulador += cont + ' '
        }else{
            console.log("PUM")
             contagemPUMs++
             acumulador += "PUM\n"
        }
        cont++
    }
    alert(acumulador)
}
