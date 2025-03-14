function calculoJurosCompostos(ci, tj, ta) {
    let montanteComposto = ci * Math.pow((1 + (tj/100)), ta)
    return (
          montanteComposto.toFixed(2)
    )
}

function calculoJurosSimples(ci, tj, ta) {
    let montanteSimples = ci * (1 + (tj/100) * ta)            //Forma para pouca linha de código
    return (
        montanteSimples.toFixed(2)
    )
}


console.log(calculoJurosCompostos(1000, 5, 12))
console.log(calculoJurosSimples(1000, 5, 12))