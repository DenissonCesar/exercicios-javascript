function gerenciarListas(a, b, acao, numero) {
    if (acao.toLowerCase() === "juntar") {
        const lista_vazia = []
        const lista_junta = lista_vazia.concat(a, b)
        console.log(lista_junta)
    } else {
        const lista_vazia = []
        const lista_junta = lista_vazia.concat(a, b)
        console.log(lista_junta)
        for (var i = 0; i <= lista_junta.length; i++) {
            /* console.log(lista_junta[i]) */
        } 
        const remove = lista_junta.splice(numero, i)
        console.log(remove)
    }
}

const lista1 = ["Maca", "Banana"]
const lista2 = ["Kiwi", "Pera"]
console.log(gerenciarListas(lista1, lista2, "removerUltimos", 4))