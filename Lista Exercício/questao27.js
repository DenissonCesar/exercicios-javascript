function inverter(obj) {
    const invertido = {};
    for (let chave in obj) {
        invertido[obj[chave]] = chave;
    }
    return invertido;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));
