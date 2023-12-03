// Classificar um produto por categoria

let categoria = "eletrônicos";
let descricao;

switch (categoria) {
    case "alimento":
        descricao = "Este é um produto comestível."
        break;
    case "vestuario":
        descricao = "Este é um produto de moda."
        break;
    case "eletrônicos":
        descricao = "Este é um produto eletrônico."
        break;
    default:
        descricao = "Este é um produto inválido."
}

console.log(descricao)