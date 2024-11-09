let a = parseFloat(prompt("Insira um número:"))
let b = parseFloat(prompt("Insira um número:"))
let c = parseFloat(prompt("Insira um número:"))

if( a > b && a > c && b > c){
    document.write ("A ordem Descrescente é: " + a + ","  + b + " e " + c)
}else if( a > b && a > c && c > b){
    document.write ("A ordem Descrescente é: " +  a+ ","+ c + " e " + b)
}else if( b > a && b > c && a > c){
    document.write ("A ordem Descrescente é: " +  b+ ","  + a + " e " + c)
}else if( b > a && b > c && c > a){
    document.write ("A ordem Descrescente é: "  + b + ","  + c + " e " + a)
}else if( c > a && c > b && a > b){
    document.write ("A ordem Descrescente é: " +  c  + ","  +a + " e " +b)
}else if( c > a && c > b && b > a){
    document.write ("A ordem Descrescente é: " + c + ","  + b + " e " + a)}