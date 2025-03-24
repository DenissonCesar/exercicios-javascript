function calcularNotas(valor) {
    const notas = [100, 50, 10, 5, 1];
    const resultado = [];
    
    for (let nota of notas) {
        let quantidade = Math.floor(valor / nota);
        if (quantidade > 0) {
            resultado.push(`${quantidade} nota(s) de R$ ${nota}`);
            valor %= nota;
        }
    }
    
    console.log(resultado);
}

// Exemplo de uso

calcularNotas(124);
