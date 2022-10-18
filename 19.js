// CERTO

const lanchonete = function (cod, quant) {
  switch (true) {
    case isNaN(quant) == true:
      return `Quantidade '${quant}' inválida`
  }
  switch (cod) {
    case 100:
      return `R$ ${quant * 3}`
    case 200:
      return `R$ ${quant * 4}`
    case 300:
      return `R$ ${quant * 5.5}`
    case 400:
      return `R$ ${quant * 7.5}`
    case 500:
      return `R$ ${quant * 3.5}`
    case 600:
      return `R$ ${(quant * 2.8).toFixed(2)}`
    default:
      return `Produto '${cod}' não existente`
  }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 3))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 1))
console.log(lanchonete(600, 3))
console.log(lanchonete(700, 1))
console.log(lanchonete(100, 'a'))
