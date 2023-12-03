// Função que inverte uma string
function inverteString(texto){
    return texto.split('').reverse().join('');
}

const original = "Marcos";
const invertida = inverteString(original);

console.log(invertida);