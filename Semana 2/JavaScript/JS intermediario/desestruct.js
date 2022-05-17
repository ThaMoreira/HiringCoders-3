const pessoa = {
    nome: 'Thais',
    sobreNome: "M Teixeira",
    idade: 25,
    profissao: 'Dev Jr.'

};

 //sem destruct
/*
 let nome=pessoa.nome;
let sobreNome = pessoa.sobreNome;
let idade = pessoa.idade;
let profissao = pessoa.profissao; */

let {nome, sobreNome,idade,profissao} = pessoa;
console.log(nome,sobreNome,idade, profissao);

