

function gerenciarTarefas(tarefas, acao, novaTarefa) {
    if (acao === "adicionarInicio") {
        tarefas.unshift(novaTarefa)
    } else if (acao === "adicionarFim") {
        tarefas.push(novaTarefa)
    } else if (acao === "removerFim") {
        tarefas.pop()
    } else if (acao === "removerInicio") {
        tarefas.shift()
    }

    return tarefas

    
}

const tarefas = ["Estudar", "Treinar", "Ler"]
console.log(gerenciarTarefas(tarefas, "adicionarInicio", "Dormir"))



