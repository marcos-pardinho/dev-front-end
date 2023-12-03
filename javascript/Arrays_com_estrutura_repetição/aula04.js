// Substitua todos os elementos negativos em um array por zero.

let array4 = [-2, 5, -8, 10, -4];

for(let i = 0; i < array4.length; i++){
    if(array4[i] < 0){
        array4[i] = 0;
    }
}

console.log(array4);


