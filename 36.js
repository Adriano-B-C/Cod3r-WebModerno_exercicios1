// CERTO

const multiplicacaoNormal = function (
  multiplos = [1, 2, 3, 4, 5],
  multiplicador = 2
) {
  let produtos = []
  for (i in multiplos) {
    if (isNaN(multiplos[i])) {
      return 'ERRO - Parametro invalido passado como argumento'
    }
    produtos.push(multiplos[i] * multiplicador)
  }
  return produtos
}

const multiplicacaoMaiorQueCinco = function (
  multiplos = [1, 2, 3, 4, 5],
  multiplicador = 5
) {
  this.produtos = []
  for (i in multiplos) {
    if (isNaN(multiplos[i])) {
      return 'ERRO - Parametro invalido passado como argumento'
    }
    if (multiplos[i] * multiplicador > 5) {
      this.produtos.push(multiplos[i] * multiplicador)
    }
  }
  return produtos
}

console.log(multiplicacaoNormal())
console.log(multiplicacaoMaiorQueCinco())

console.log(multiplicacaoNormal('a'))
console.log(multiplicacaoMaiorQueCinco('a'))
