// CERTO

const progressaoAritmetica = function (
  termos = 5,
  primeiroTermo = 1,
  razão = 2
) {
  let produto = [primeiroTermo]
  for (let i = 1; i <= termos - 1; i++) {
    produto.push(produto[i - 1] + razão)
  }
  return produto
}

const progressaoGeometrica = function (
  termos = 5,
  primeiroTermo = 1,
  razão = 2
) {
  let produto = [primeiroTermo]
  for (let i = 1; i <= termos - 1; i++) {
    produto.push(produto[i - 1] * razão)
  }
  return produto
}

console.log(progressaoAritmetica())
console.log(progressaoGeometrica())
