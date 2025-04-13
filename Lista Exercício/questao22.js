function objetoParaPares(obj) {
    return Object.entries(obj);
}


const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
};

const pares = objetoParaPares(pessoa);
console.log(pares);

