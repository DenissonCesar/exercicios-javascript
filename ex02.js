let numeroDado = Number(Math.ceil(Math.random() * 6))

let numeroUsuario = prompt("Escolha um número de 1 a 6: ")


if (numeroDado == numeroUsuario) {
    alert("Parabéns, você acertou!")
} else {
    alert(`Que pena o número escolhido foi: ${numeroDado}`)
}