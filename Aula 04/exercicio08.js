/*function filtrarDevedores(reais) {
    const acima_oitenta = reais.filter

} */


const devedoresTotais = [90, 87.2, 32, 180.45]

const devedoresOitenta = devedoresTotais.filter(filtrarDevedores)

function filtrarDevedores(devedoresTotais) {
    return devedoresTotais > 80
}

console.log(devedoresOitenta)