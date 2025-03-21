function calcularVendas(vendas) {
    return console.log(vendas.reduce((acumulador, atual) => {
        return acumulador += atual
    }))
}

const vendas = [10, 20, 30]
console.log(calcularVendas(vendas))