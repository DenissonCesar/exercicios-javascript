let pessoa = {
    nome: "Denisson",
    idade: 20,
    cidade: "Maceió"
}

function listarValores(pessoa) {
    console.log(Object.values(pessoa))
}

console.log(listarValores(pessoa))