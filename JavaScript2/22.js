// CERTO


const funcaoDaSorte = function (...numero) {
  if (numero > 10 || numero < 1) return 'Valor inválido, use numeros inteiros de 1 à 10'
  let sorteado = Math.round((Math.random()) * 10)
  if (numero == sorteado) return `Parabéns! O número sorteado foi ${sorteado}`
  return `Que pena! O número sorteado foi ${sorteado}`
}

console.log(funcaoDaSorte(1))
console.log(funcaoDaSorte(2))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(7))
console.log(funcaoDaSorte(8))
console.log(funcaoDaSorte(9))
console.log(funcaoDaSorte(10))
console.log('------------------------------------')
console.log(funcaoDaSorte(11))
console.log(funcaoDaSorte(0))
console.log(funcaoDaSorte(-1))
