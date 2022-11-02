// CERTO
// Porém, não é otimizado. Números grandes não podem ser calculados em tempo viável


const mult = function(coeficiente, multiplicador) {
  if (coeficiente < 0 || multiplicador < 0 || Number.isInteger(coeficiente) == false || Number.isInteger(multiplicador) == false) {
    return 'Valores inválidos, use numeros inteiros positivos'
  }

  let total = 0
  for (let i = 0; i < multiplicador; i++) {
    total += coeficiente
  }
  return total
}

// console.log(mult(900,
//   9000000000000000000000000000000000000000000000000000000000000))
console.log(mult(2,2))
console.log(mult(5,5))
console.log(mult(0,5))
console.log(mult('0',5))
console.log(mult(0,5.5))
console.log(mult(-2,5))