let saldo = parseFloat(prompt ("Indique o seu Saldo Médio:"))

let valor_saldo= document.write( "Seu saldo Médio é de: " + saldo + "<br>")
let valor_credito3= (saldo+(saldo*0.3))
let valor_credito4= (saldo+(saldo*0.4))
let valor_credito5= (saldo+(saldo*0.5))

if(saldo>=0 && saldo<=500){
    document.write ( "<br> Seu Percentual de Crédito é: Nenhum Crédito")
}else if(saldo>500 && saldo<=1000){
    document.write ("<br> Seu Percentual de Crédito é 30%, resultando em: " + valor_credito3)
}else if(saldo>1000 && saldo<=3000){
    document.write (" <br> Seu Percentual de Crédito é 40%, resultando em: " + valor_credito4)
}else if(saldo>3000){
    document.write (" <br> Seu Percentual de Crédito é 50%, resultando em: " + valor_credito5) 
}else{
    document.write (" <br> Saldo Inválido")
} 
