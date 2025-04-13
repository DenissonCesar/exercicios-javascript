function calcularDespesas(produtos) {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}

const lista = [
    { nome: 'Notebook', categoria: 'Eletrônicos', preco: 2500 },
    { nome: 'Café', categoria: 'Alimentos', preco: 15 },
    { nome: 'Fones de ouvido', categoria: 'Eletrônicos', preco: 200 }
];

const total = calcularDespesas(lista);
console.log(total);
