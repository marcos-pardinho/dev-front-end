// Funções com parâmetros

// Função que retorna a soma de dois números
function soma(a, b) {
    return a + b;
}

console.log(soma(3, 4));

// Função que calcula a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return altura * base;
}

console.log(calcularAreaRetangulo(5, 10))

// Função que verifica se um número é par
function ehPar(numero) {
        return numero % 2 === 0;
}

console.log(ehPar(7));

// Funções que concatena duas strings
function concatenaStrings(str1, str2) {
    return str1 + " " + str2;
}

console.log(concatenaStrings("Olá", "Mundo!"));

// Fuções que retorna o maior entre três números
function maiorEntreTres(a, b, c) {
    return Math.max(a,b,c);
}

console.log(maiorEntreTres(8, 12, 6));