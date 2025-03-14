let aleatorio = Math.floor(Math.random() * 100) + 1
alert(aleatorio)
let tentativa 
let contador = 1

while (tentativa !== aleatorio) {
    let tentativa = parseInt(prompt("Adivinhe o número que estou pensando de 1 a 100: "))  //Aqui tive ajuda do chatGPT, não sei se o porque foi de eu não ter colocado o prefixo "parseInt"
    contador++

    if (tentativa > aleatorio) {
        alert("Menor")
    } else if (tentativa < aleatorio) {
        alert("Maior")
    } else {
        alert (`Parabéns, você acertou e teve ${contador} tentaivas!`)
    }
}