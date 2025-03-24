function contarImpares(inicio, fim) {
    let contador = inicio
    while(contador <= fim) {
        if (contador % 2 == 1){
            console.log(contador)
        }
        contador ++
    }
}

contarImpares(0,100)

