function anuidade(mes, valor) {
    let valorPago = valor
    for (let i = 1; i <= mes; i++){
        valor *= 1.05
    }

    console.log(`Você deverá pagar ${valor.toFixed(2)}`)
}

anuidade(2, 200)