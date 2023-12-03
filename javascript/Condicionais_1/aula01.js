// Verificar o dia da semana

let diaDaSemana = "Sábado";
let mensagem;

switch (diaDaSemana) {
    case "Segunda":
    case "Terça":
    case "Quarta":
    case "Quinta":
    case "Sexta":
        mensagem = "É um dia de trabalho.";
        break;
    case "Sábado":
    case "Domingo":
        mensagem = "É um dia de descanso."
        break;
    default:
        mensagem = "Dia Inválido.";
}

console.log(mensagem)


