function notas(vetor) {
   for (let i = 1; i <= vetor.length; i++) {
        if (vetor[i] >= 0 && vetor[i] <= 4.9) {
            console.log(`${vetor[i]} Conceito D`)
        } else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            console.log(`${vetor[i]} Conceito C`)
        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            console.log(`${vetor[i]} Conceito B`)
        } else {
            console.log(`${vetor[i]} Conceito A`)
        }
   } 
}

const vetor = [1, 2, 10, 9, 2, 6, 8, 11, 22, 4, 5]
notas(vetor)