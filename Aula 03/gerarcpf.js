

function gerarCPF() {               //Criamos a função gerar CPF, no meu caso sem parâmetro
    const cpf = []                  //Criamos também um array vazio
    for (let i = 1; i <= 11; i++) {         //For utilizado para adicionarmos  os 11 números no array "cpf"
        const numero_aleatoro = Math.floor(Math.random() * 10)
        cpf.push(numero_aleatoro)           //Será adicionado os números aleatórios na array
    }

    console.log(`${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`)
    
    //"console.log" muito grande, mas foi o jeito que consegui fazer, se tiver um jeito mais fácil...
    
}


console.log(gerarCPF()) 
