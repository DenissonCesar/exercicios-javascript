let name = prompt("Qual é o seu nome?")


//Primeira Letra do Nome Maiúscula.
let letra = name.slice(0, 1)
let primeiraLetra = letra.toLocaleUpperCase()

//Tamanho do nome para assim verificar as demais letras e colocar em minúscula.
let tamanhoNome = name.length
let restoNome = name.slice(1, tamanhoNome + 1)
let nomeMinusculo = restoNome.toLocaleLowerCase()
console.log(primeiraLetra + nomeMinusculo)

alert(`Olá, [${primeiraLetra + nomeMinusculo}], seja bem-vindo(a)!`)

