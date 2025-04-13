function filtrarNumeros(array) {
    return array.filter(elemento => typeof elemento === 'number');
}


const dados = [1, 'dois', 3, true, 4.5, 'texto', null];
const numeros = filtrarNumeros(dados);
console.log(numeros);
