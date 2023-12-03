// Função que retorna o resultado de uma operação matemática

function operacaoMatematica(a, b, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            resultado = a / b;

        default:
            resultado = "Operação Inválida"
    }

    return resultado;
}

const operador1 = 10;
const operador2 = 5;
const op = "*";

const resultadoOperacao = operacaoMatematica(operador1, operador2, op);

console.log(resultadoOperacao)
