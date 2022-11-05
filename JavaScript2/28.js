// CERTO


const filtrarPorQuantidade = function(lista, quant) {
  let temporario = lista
  let resultado = []

  for (let i = 0; i < quant--; i++) {
    temporario = temporario.map( e => Math.trunc(e/10))
  }

  if (quant == -1) {
    temporario.forEach((elemento, indice) => { if (elemento == 0) {resultado.push(lista[indice])}})
    return resultado
  }
  temporario.forEach((elemento, indice) => { if (elemento >= 1 && elemento < 10) {resultado.push(lista[indice])}})

  return resultado
}


console.log(filtrarPorQuantidade([1, 10, 100, 1000, 10000], 3)) // Esperado [100]
console.log(filtrarPorQuantidade([7, 22, 345, 7501, 18567], 3)) // Esperado [345]
console.log(filtrarPorQuantidade([38, 2, 365, 10, 125, 11], 2)) // Esperado [38, 10, 11]
console.log(filtrarPorQuantidade([5, 9, 1, 125, 11], 1)) // Esperado [5, 9, 1]