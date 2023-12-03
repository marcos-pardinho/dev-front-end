// Problema 4: Determinando o maior de três números

const num1 = 10;
const num2 = 15;
const num3 = 5;

if (num1 >= num2 && num1 >= num3){
    console.log("O primeiro número é o maior.");

}else if (num2 >= num1 && num2 >= num3){
    console.log("O segundo número é o maior.");

}else {
    console.log("O terceiro número é o maior");
}