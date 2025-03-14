

function calcularMedia(notas)  {

    const ordenar = notas.sort((a, b) => b - a)
    const tresMelhoresNotas = ordenar.slice(0, 3)
    const soma = tresMelhoresNotas.reduce((acc, nota) => acc + nota, 0)
    console.log(tresMelhoresNotas)
    const media = soma / tresMelhoresNotas.length
    return media
}

const notas = [9, 8, 7, 2, 6, 7]
console.log(notas)
console.log(calcularMedia(notas))

