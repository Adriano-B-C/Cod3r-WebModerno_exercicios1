// CERTO

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [0.1, 0.2, 0.3, 0.4]

let completo1 = vetorInteiro.concat(vetorString, vetorDouble)
let completo2 = vetorInteiro + ',' + vetorString.concat(vetorDouble)

console.log(completo1)
console.log(completo2)
