function intervaloVetores(vetor, inicio, fim) {
    let dentro = 0
    let fora = 0

    for (let i = 1; i <= vetor.length; i++) {
        if (vetor[i] >= inicio && vetor[i] <= fim) {
            dentro++
        } else {
            fora++
        }
    }

    console.log(`Existem ${dentro} dentro do intervalo ${inicio} e ${fim}`)
    console.log(`Existem ${fora} fora do intervalo ${inicio} e ${fim}`)
}

const vetor = [1, 2, 5, 6, 10, 82, 31, 12]
intervaloVetores(vetor, 5, 31)