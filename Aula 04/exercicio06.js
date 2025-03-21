function calcularMedia(notas) {
    let soma = 0
    let contador = 1
    notas.forEach(index => {
        soma += index
        contador++
    });
    console.log((soma / contador).toFixed(2))
}

function acimaMedia(notas) {
    const notas_acima = []
    notas.forEach(index => {
        if (index >= 6) {
            return notas_acima.push(index)
        }
    })
    console.log(notas_acima)
}


const notas = [10, 9, 8, 6, 7, 5, 4]
console.log(calcularMedia(notas))
console.log(acimaMedia(notas))