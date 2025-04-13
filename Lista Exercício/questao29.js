const produtos = [
    { nome: "Notebook", preco: 3000, emEstoque: true },
    { nome: "Celular", preco: 2000, emEstoque: false },
    { nome: "Mouse", preco: 100, emEstoque: true },
    { nome: "Teclado", preco: 150, emEstoque: false }
];

function filtrarEmEstoque(lista) {
    return lista.filter(produto => produto.emEstoque);
}

console.log(filtrarEmEstoque(produtos));
