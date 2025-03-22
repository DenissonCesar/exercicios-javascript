function recarregar() {
    let jogador1 = Math.floor(Math.random() * 6) + 1;
    let jogador2 = Math.floor(Math.random() * 6) + 1;
    
    // Pegando um único elemento corretamente
    let imagem1 = document.querySelector(".img1");
    let imagem2 = document.querySelector(".img2");

    // Atualizando as imagens corretamente
    if (imagem1) imagem1.setAttribute("src", `images/dado${jogador1}.png`);
    if (imagem2) imagem2.setAttribute("src", `images/dado${jogador2}.png`);
    
    let titulo = document.querySelector("h1");

    if (titulo) {
        if (jogador1 > jogador2) {
            titulo.innerHTML = "🚩 O Jogador 1 Venceu!";
        } else if (jogador2 > jogador1) {
            titulo.innerHTML = "O Jogador 2 Venceu! 🚩";
        } else {
            titulo.innerHTML = "Empate!";
        }
    }
}
