let senha = prompt('Digite uma senha segura: ')
if (!senha) {
    alert("[ERRO] Digite uma senha")
} else {
    senhaSemEspaco = senha.trim()
    senhaComArroba = senhaSemEspaco.replaceAll("a", "@")
    senhaComUm = senhaComArroba.replaceAll("i", "1")
    senhaSegura = senhaComUm.replaceAll("o", "0")

    window.alert(senhaSegura)
}

