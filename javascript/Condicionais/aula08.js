// Verificar se um número é par ou impar
const numero = 9;

switch (numero % 2) {
    case 0:
            console.log("O número é par");
        break;
    case 1:
            console.log("O número é impar");
        break

    default:
        console.log("Número inválido")
}