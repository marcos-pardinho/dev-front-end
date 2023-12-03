// Conte o número de elementos pares em um array

let array3 = [2, 7, 4, 8, 10];
let count3 = 0;

for(let i = 0; i < array3.length; i++){
    if (array3[i] % 2 === 0){
        count3++;
    }
}

console.log(count3);