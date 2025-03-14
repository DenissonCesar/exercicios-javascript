function analisarDesempenho(pontuacoes) {
    let jogos = pontuacoes.split(" ").map(Number)
    let recordes = 0
    let piorJogo = 0
    let melhorPontuacao = jogos[0]
    let piorPontuacao = jogos[0]

    for (let i = 1; i < jogos.length; i++) {
        if (jogos[i] > melhorPontuacao) {
            melhorPontuacao = jogos[i]
            recordes++
        }
        if (jogos[i] < piorPontuacao) {
            piorPontuacao = jogos[i]
            piorJogo = i + 1
        }
    }

    return [recordes, piorJogo]
}


let stringPontuacoes = "10 20 20 8 25 3 0 30 1"
console.log(analisarDesempenho(stringPontuacoes))

//Versionamento no Git: 7 exercícios resolvidos
