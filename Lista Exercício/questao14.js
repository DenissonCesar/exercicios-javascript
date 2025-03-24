function planoSaude(idade) {
    if (idade <= 10) {
        return console.log(`Criança paga R$${100 + 80}.`)
    } else if (idade > 10 && idade <= 30) {
        return console.log(`Conveniados entre 10 e 30 anos paga R$${100 + 50}.`)
    } else if (idade > 10 && idade <= 30) {
        return console.log(`Conveniados entre 30 e 60 anos paga R$${100 + 95}.`)
    } else {
        return console.log(`Conveniados com 60 anos ou mais R$${100 + 130}.`)
    }
}

planoSaude(12)