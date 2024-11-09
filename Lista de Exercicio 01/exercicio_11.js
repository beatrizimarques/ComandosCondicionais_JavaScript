let nome = prompt("Insira o seu nome:")
let salario = parseFloat(prompt ('Insira seu salário:'))
let vendas = parseFloat(prompt ('Insira seu total de vendas:'))

let comissao = (vendas*0.15)
let salario_comissao = salario + comissao

document.write (" <br> Nome do vendedor: " + nome)
document.write (" <br> Salário Fixo: " + salario)
document.write (" <br> Total de comissão: " + comissao)
document.write (" <br> Salário com comissão: " + salario_comissao)