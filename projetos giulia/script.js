
function calcularIMC(){
    let peso = document.getElementById('inPeso').value
    let altura = document.getElementById('inpAltura').value
    
    // let IMC = peso/(altura*altura)
    let IMC = peso/(altura**2)
    // document.getElementById('inpResultado').value = "seu IMC é: "+ IMC+
    document.getElementById('pResultado').innerHTML = "seu IMC é: "+IMC

    // alert("se fosse o jack, ele diria que o imc é: " + IMC)
    
    // console.log(peso);

}
function calcularIdadeDeCao(){
let IdadeDeCao = document.getElementById('inIdadeDeCao').value
let IdadeHumana = IdadeDeCao * 7
 
if(IdadeHumana > 60){
alert("Seu cãozinho aposentado tem " +(IdadeDeCao *7) + "anos.")
}
else{
    alert("Seu cãozinho neném tem" +(IdadeDeCao *7)+ "anos.")
}
}