function lados(a, b, c) {
    if ( a == b && a == c) {
        return "Triângulo Equilátero"
    } else if (a == b || a == c || b == a) {
        return "Triângulo Isóceles"
    } else {
        return "Triângulo Escaleno"
    }
}

console.log(lados(1, 2, 3))