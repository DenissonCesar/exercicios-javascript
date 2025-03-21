function converterMoedas(real) {
    
    const dolares = real.map((value) => {
        return value * 5
    })
    console.log(dolares)
}


const real = [1, 2, 3]
console.log(converterMoedas(real))