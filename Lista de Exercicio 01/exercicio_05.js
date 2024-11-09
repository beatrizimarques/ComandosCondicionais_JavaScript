let idade = parseInt(prompt("Insira a sua Idade:"))

if(idade<16){
    document.write("Não vota")
}else if (idade>=18 && idade<=69){
    document.write("Voto Obrigatório")
}else{
    document.write ("Voto Opcional")
}
