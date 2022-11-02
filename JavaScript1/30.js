// CERTO

const minMax = function (valores = [0, 1, 2, 3]) {
  for (i in valores) {
    if (isNaN(valores[i])) {
      return `ERRO - Valor não suportado passado como argumento, uso: [$valoreNúmerico1, $valoreNúmerico2, ...]`
    }
  }
  let lista = Object.values(valores)
  let menor = Math.min(...lista)
  let maior = Math.max(...lista)
  if (isFinite(maior) != true || isFinite(menor) != true) {
    return `ERRO - Valor não suportado passado como argumento, uso: [$valoreNúmerico1, $valoreNúmerico2, ...]`
  }
  return `${menor}, ${maior}`
}

console.log(minMax())
console.log(minMax(30, 10, 1, 32, 0))
console.log(minMax('a', 10, 1, 32, 0))
console.log(minMax(30, 'a', 1, 32, 0))
console.log(minMax([30, 10, 1, 32, 0]))
console.log(minMax(['a', 10, 1, 32, 0]))
console.log(minMax([30, 'a', 1, 32, 0]))
