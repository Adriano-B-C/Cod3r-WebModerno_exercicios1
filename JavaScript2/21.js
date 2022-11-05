// CERTO


const menorNumero = function (arr) {
  let ordenada = arr
  ordenada.sort((a, b) => a - b)
  return ordenada[0]
}

// SOLUÇÃO MELHOR
const menorNumeroMELHOR = arr => Math.min(...arr)
// O Operador '...' pode ser usado para receber vários argumentos em uma função


console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

console.log(menorNumeroMELHOR([10, 5, 35, 65]))
console.log(menorNumeroMELHOR([5, -15, 50, 3]))