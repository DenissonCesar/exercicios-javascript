const pessoa = {
    nome: "Duda",
    idade: 19,
    altura: 1.80


}

function informacao(pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Altura: ${pessoa.altura}`
}



console.log(informacao(pessoa))

