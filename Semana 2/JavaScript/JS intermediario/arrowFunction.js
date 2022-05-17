function soma(x,y){
    return x + y;
}

console.log(soma(3,4));

const multiplicacao = function (x,y){
    return x * y ;
}
console.log(multiplicacao(3,4));

//arrow function
const dividir = (x, y) => {
    return x/y;
}
console.log(dividir(3,4));

const objeto = () => ({ nome: 'Thais', sobreNome: 'Moreira Teixeira'});