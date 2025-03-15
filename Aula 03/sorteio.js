 
 function sorteio(numero1, numero2) {
    if (numero1 > numero2) {                    //Se o número1 for maior que o número2, então o limite será até o numero1
        return Math.floor(Math.random() * (numero1 - numero2) + numero2)        //Utiliza-se o floor para arredondar, e não ser um número real
    } else {
        return Math.floor(Math.random() * (numero2 - numero1) + numero1)        //Resolve-se primeiro a equação no parenteses, quando for resolvida, ela será multiplicada com o número aleatório, assim que resolvida soma-se ela com o número menor para o resultado (se possível) ser maior ou igual ao numero menor
    }

}

console.log(sorteio(6, 2))          //Resultado

