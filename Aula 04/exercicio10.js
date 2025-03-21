

function listarPropriedades(carro) {
    console.log(Object.keys(carro))
}

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
}

console.log(listarPropriedades(carro))