// Exercicio: Classificar um produto por categoria
const categoria = "vestuário";

switch (categoria) {
    case "alimentos":
            console.log("Produto pertende a categoria de alimentos");
        break;
    case "vestuário":
            console.log("Produto pertence a categoria de vestuário");
        break;
    case "eletrônicos":
            console.log("Produto pertence a categoria de eletrônicos");
            break;
    default:
        console.log("Categoria inválida....")
}