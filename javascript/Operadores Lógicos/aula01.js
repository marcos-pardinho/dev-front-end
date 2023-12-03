// Verificar se um número é maior que 10  e menor que 20
const numero = 15
const resultado1 = numero > 10 && numero < 20
console.log(`O numero ${numero} está entre 10 e 20 ? ${resultado1}`)


// Verificar se uma pessoa é maior de idade (idade maior ou igual a 18)
const idade = 20
const possuiCNH = true
const resultado2 = idade >= 18 && possuiCNH
console.log(`A pessoa é maior de idade e possui CNH? ${resultado2}`)

// Verificar se uma pessoa pode votar (idade maior ou igual a 16)
const idade3 = 17
const eEstrangeiro = false
const resultado3 = idade3 >= 16 && !eEstrangeiro
console.log(`A pessoa pode votar? ${resultado3}`)

// Verificar se um número é impar e positivo
const numero4 = 9
const resultado4 = numero4 % 2 !== 0 && numero4 > 0
console.log(`O número ${numero4} é impar e positivo? ${resultado4}`)

// Verificar se um número é zero ou negativo
const numero5 = -5
const resultado5 = numero5 <= 0
console.log(`O número ${numero5} é zero ou negativo? ${resultado5}`)