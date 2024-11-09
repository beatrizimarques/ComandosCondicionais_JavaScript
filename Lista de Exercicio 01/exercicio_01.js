let prato = parseFloat(prompt("Informe o número do seu Prato:"))
        let sobremesa = parseFloat(prompt("Informe o número da sua Sobremesa:"))
        let bebida = parseFloat(prompt("Informe o número da sua Bebida:"))

        let calorias = (prato + sobremesa + bebida)

        switch (prato){
            case "1" : document.write("180")
            break
            case "Peixe" : document.write("230")
            break
            case "Frango" : document.write("250")
            break
            case "Carne" : document.write("350")
            break
        }

        switch (sobremesa){
            case "1" : document.write("75")
            break
            case "Sorvete diet" : document.write("110")
            break
            case "Mouse diet" : document.write("170")
            break
            case "Mouse chcocolate" : document.write("200")
            break
        }

        switch (prato){
            case "1" : document.write("20")
            break
            case "Suco de laranja" : document.write("70")
            break
            case "Suco de melão" : document.write("100")
            break
            case "Refrigerante diet" : document.write("65")
            break

        }