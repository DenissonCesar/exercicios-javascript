function pedido(item, quantidade) {
    switch(item) {
        case 100:
            console.log(`Cachorro Quente: ${quantidade * 3}`)
            break
        case 200:
            console.log(`Hambúrguer Simples: ${quantidade * 4}`)
            break
        case 300:
            console.log(`Cheeseburguer: ${quantidade * 5.5}`)
            break
        case 400:
            console.log(`Bauru: ${quantidade * 7.5}`)
            break
        case 500:
            console.log(`Refrigerante: ${quantidade * 3.5}`)
            break
        case 100:
            console.log(`Suco: ${quantidade * 2.8}`)
            break
        default:
            console.log("Produto não existente")
    }
}


pedido(100, 8)