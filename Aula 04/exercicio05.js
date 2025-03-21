function maior(numeros) {
    for (const index of numeros) {
        numeros.sort((a, b) => b - a)
    }
    console.log(numeros[0])
}

function menor(numeros) {
    for (const index of numeros) {
        numeros.sort((a, b) => a - b)
    }
    console.log(numeros[0])
}


const numeros = [1, 5, 2, 10, 9, -2]
console.log(maior(numeros))
console.log(menor(numeros))