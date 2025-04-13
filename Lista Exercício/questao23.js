function paresEmIndicesPares(array) {
    return array.filter((numero, indice) => numero % 2 === 0 && indice % 2 === 0);
}

const numeros = [10, 15, 22, 33, 40, 55, 60];
const resultado = paresEmIndicesPares(numeros);
console.log(resultado);
