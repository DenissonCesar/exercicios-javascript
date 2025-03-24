function revendaCarro(modelo) {
    switch(modelo) {
        case "hatch": 
            return console.log("Compra efetuada com sucesso!")
            break
        case "sedans":
        case "motocicletas":
        case "caminhonetes": 
            return console.log("Tem certeza que prefere esse modelo?")
            break
        default:
            return console.log("Não trabalhamos com esse tipo de automóvel")
    }
}


(revendaCarro("moto"))