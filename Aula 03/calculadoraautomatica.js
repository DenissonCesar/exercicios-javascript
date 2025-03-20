function calculadoraAutomatica() {
     const numero1 = Math.floor(Math.random() * 99)     //Declarar as variáveis que a memória processará
     const numero2 = Math.floor(Math.random() * 99)
     const i = Math.floor((Math.random() * 5) + 1)      //Variável que será a indicadora de qual operador será operacionado
     if (i == 1) {                                                  // 1 = Soma, 2 = Subtração, 3 = Multiplicação, 4 = Divisão, 5 = Resto
        return `${numero1} + ${numero2} = ${numero1 + numero2}`
     } else if (i == 2) {
        return `${numero1} - ${numero2} = ${numero1 - numero2}`
     } else if (i == 3) {
        return `${numero1} * ${numero2} = ${numero1 * numero2}`
     } else if(i == 4) {
        if (numero1 == 0) {
            const numero1 = Math.floor(Math.random() * 99)          //Se um dos números for 0 nas operações de divisão ou resto, fará uma nova atribuição para essas variáveis
        } else if (numero2 == 0) {
            const numero2 = Math.floor(Math.random() * 99)
        } else {
            return `${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(2)}`
        }
     } else {
        if (numero1 == 0) {
            const numero1 = Math.floor(Math.random() * 99)
        } else if (numero2 == 0) {
            const numero2 = Math.floor(Math.random() * 99)
        } else {
            return `${numero1} % ${numero2} = ${(numero1 % numero2).toFixed(2)}`
        }
     }


}

console.log(calculadoraAutomatica())            //Resultado da Calculadora Automática
