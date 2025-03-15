function primo(numero) {
    let contador = 0                        
    for (let i = 1; i <= numero; i++) {     
        if (numero % i === 0) {
            contador++                   //Contador vai pontuar quantos numeros que dividem com o parâmetro vai restar 0
        } 
    }

    if (contador > 2) {                  
        return false                    //Se tiver mais do que dois (1 e o parâmetro), é porque ele não é primo
    } else {
        return true                     //Se nào é primo
    }

    
}

console.log(primo(19))