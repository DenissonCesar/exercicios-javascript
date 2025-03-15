function calculadora(numero1, numero2, operador) {
    if (operador === '+') {                 //Lendo o operador
        return numero1 + numero2            //Retorna o resultado com o operador
    } else if (operador === '-') {
        return numero1 - numero2 
    } else if (operador === '*') {
        return numero1 * numero2
    } else if (operador === '/') {
        return numero1 / numero2
    } else if (operador === '%') {
        return numero1 % numero2
    } else {
        return 'Erro, operador inválido'
    } 
}


console.log(calculadora(10, 5, ''))