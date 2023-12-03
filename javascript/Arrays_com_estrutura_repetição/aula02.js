// Encontre o maior número em um array
let array2 = [10, 5, 8, 15, 3];
let maior2 = array2[0];

for (let i = 1; i < array2.length; i++){
    if (array2[i] > maior2){
        maior2 = array2[i];
    }
}

console.log(maior2);