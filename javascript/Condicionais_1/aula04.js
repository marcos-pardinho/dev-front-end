// Determinar a faixa etária

let idade = 66;
let faixaEtaria;

switch (true) {
    case idade < 18:
        faixaEtaria = "Menor de idade."
        break;
    case idade >= 18 && idade < 65:
        faixaEtaria = "Adulto"
        break;
    default:
        faixaEtaria = "Idoso"
}

console.log(`Esta pessoa é considerado ${faixaEtaria}.`)
        