
function somarNumeros(numeros) {
    let soma = 0
    for (let indice in numeros) {
        const numero = numeros[indice]
        if (numero % 2 === 0 && numero % 3 === 0) {
            soma += numero
        }
        
      }
      return soma
}

const numeros = [6, 6]
const resultado = somarNumeros(numeros)
console.log(resultado)