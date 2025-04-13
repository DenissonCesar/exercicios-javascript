function adivinharNumero(numero) {
    const sorteado = Math.floor(Math.random() * 10) + 1;
    if (numero === sorteado) {
        return `Parabéns! O número sorteado foi ${sorteado}`;
    } else {
        return `Que pena! O número sorteado foi ${sorteado}`;
    }
}

console.log(adivinharNumero(5));
