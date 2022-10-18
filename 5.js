// CERTO

const dinheirocerto = function (valor) {
  if (valor < 1) {
    valor *= 100
    return `R$ 0,${Math.floor(valor)}`
  } else {
    let decimal = (valor - Math.trunc(valor)) * 100
    return `R$ ${Math.trunc(valor)},${Math.floor(decimal)}`
  }
}

console.log(dinheirocerto(0.33333))
console.log(dinheirocerto(1.333))
console.log(dinheirocerto(0.30000000000000004))
