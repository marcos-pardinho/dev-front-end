// Função que verifica se um número é par

function ehPar(numero) {
    return numero % 2 === 0;
}

const numero = 6;
const par = ehPar(numero)
console.log(par)