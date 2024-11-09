let salario_minimo = parseFloat(prompt("Insira o valor do salário mínimo:"))
let salario_usuario = parseFloat(prompt("Insira o valor do seu salário:"))

let calculo = (salario_usuario/salario_minimo).toFixed (2)

document.write ("O seu salário equivale á: " + calculo + " sálarios mínimos")