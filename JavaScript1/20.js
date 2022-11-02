// CERTO
// P.S.: Meu melhor design até o momento
// P.S.: Primeira otimização que eu realizei

const caixa = function (pagamento) {
  let troco = []
  let notas = [100, 50, 10, 5, 1]
  for (let i = 0; i <= 5; i++) {
    if (pagamento / notas[i] >= 1) {
      troco.push(
        `${Math.floor(pagamento / notas[i])} nota(s) de R$ ${notas[i]}`
      )
      pagamento -= notas[i]
    }
  }
  troco = troco.join(', ')
  return troco
}

console.log(caixa(100))
console.log(caixa(50))
console.log(caixa(10))
console.log(caixa(5))
console.log(caixa(1))
console.log(caixa(166))
console.log(caixa(18))
