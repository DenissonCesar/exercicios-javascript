let produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 10
}

function objetoParaMatriz(produto) {
    console.log(Object.entries(produto))
}

(objetoParaMatriz(produto))