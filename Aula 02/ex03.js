let usuario1 = prompt("[JOGADOR 1] Escolha um número de 1 a 6: ")
let usuario2 = prompt("[JOGADOR 2] Escolha um número de 1 a 6: ")

let dado  = (Math.ceil(Math.random() * 6))
alert(dado)

let ganhausuario1 = Math.abs(dado - usuario1)
let ganhaUsuario2 = Math.abs(dado - usuario2)

if (ganhaUsuario1 < ganhaUsuario2) {
    alert("Ganhou [JOGADOR 1]")
} else if (ganhaUsuario2 < ganhaUsuario1) {
    alert("Ganhou [JOGADOR 2]")
} else {
    alert("EMPATE")
}

