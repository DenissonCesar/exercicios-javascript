function melhorEstudante(estudantes) {
    let melhor = { nome: '', media: 0 };

    for (let nome in estudantes) {
        const notas = estudantes[nome];
        const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

        if (media > melhor.media) {
            melhor = { nome, media };
        }
    }

    return melhor;
}

console.log(melhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));
