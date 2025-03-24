function aumentoSalario(plano, salario) {
    switch(plano.toLowerCase()) {
        case "planoa":
            return console.log(salario * 1.10)
            break
        case "planob": 
            return console.log(salario * 1.20)
            break
        case "planoc": 
            return console.log(salario * 1.30)
            break
    }
}

aumentoSalario("planoc", 1200)