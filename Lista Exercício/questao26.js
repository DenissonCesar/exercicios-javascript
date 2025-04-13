function contarPalavras(texto) {
    const palavras = texto.trim().split(/\s+/);
    return palavras.length;
}

console.log(contarPalavras("Essa é uma frase de exemplo."));
