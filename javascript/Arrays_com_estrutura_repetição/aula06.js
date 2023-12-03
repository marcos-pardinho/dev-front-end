// Verifique se um elemento está presente em um array
let array6 = [3, 7, 1, 9, 4];
let elementoProcurado = 9;
let encontrado6 = false;

for (let i = 0; i < array6.length; i++){
    if(array6[i] === elementoProcurado){
        encontrado6 = true;
        break;
    }
}

console.log(encontrado6);