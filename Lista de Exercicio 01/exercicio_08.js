let ipi = prompt("Insira a porcentagem do Imposto sobre Produtos Industrializados:")
let codigo1 = parseFloat(prompt("Insira o código da peça 1:"))
let valor1 = parseFloat(prompt("Insira o valor unitário da peça 1:"))
let quantidade1 = parseFloat(prompt("Insira a quantidade de peças 1:"))
let codigo2 = parseFloat(prompt("Insira o código da peça 2:"))
let valor2 = parseFloat(prompt("Insira o valor unitário da peça 2:"))
let quantidade2 = parseFloat(prompt("Insira a quantidade de peças 2:"))

let calculo = ((valor1*quantidade1 + valor2*quantidade2) * (ipi/100+1)).toFixed(2)

document.write("O valor total a ser pago, é de: " + calculo)