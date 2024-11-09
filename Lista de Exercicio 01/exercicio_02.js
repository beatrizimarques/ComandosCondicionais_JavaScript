let numero = prompt("Entre com o número:")

if(numero%2 == 0){
    document.write ("Divisível por 2")
} else if(numero%5 == 0){
    document.write ("Divisível por 5")
} else if(numero%10 == 0){
    document.write ("Divisível por 10")
} else{
    document.write ("Não é divisível")
}
