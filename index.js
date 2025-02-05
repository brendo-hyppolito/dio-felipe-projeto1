//Variáveis
//Nome do heroi - tipo string
let heroi = "Fulano"

//Quantidade de exp do heroi - tipo num
let exp = 0

//Nível do herói - tipo string
let nivel = "nivel"

//Estrutura de decisão para o nível do heroi

if (0 <= exp && exp <= 1000){
   nivel = "Ferro" 
}

else if (1001 <= exp && exp <= 2000){
    nivel = "Bronze"
}

else if (2001 <= exp && exp <=5000){
    nivel = "Prata"
}

else if (5001 <= exp && exp <= 7000){
    nivel = "Ouro"
}

else if (7001 <= exp && exp <= 8000){
    nivel = "Platina"
}

else if (8001 <= exp && exp <= 9000){
    nivel = "Ascendente"
}

else if (9001 <= exp && exp <= 10000){
    nivel = "Imortal"
}

else if (exp >= 10001){
    nivel = "Radiante"
}

else {
    nivel = "Inválido"
}


//Output - Classificação do nível do herói
if (nivel != "Inválido"){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel + ".")
}

else{
    console.log("Nível do Herói de nome " + heroi + " é inválido.")
}
