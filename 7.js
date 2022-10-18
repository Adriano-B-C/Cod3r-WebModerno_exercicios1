// CERTO


const equacao = function (ax2 = 1, bx = 1, c = 1) {
  let Delta = bx ** 2 - 4 * ax2 * c
  if (Delta < 0) {
    return 'Delta é negativo'
  } else {
    let x1 = ((-bx + Math.sqrt(Delta)) / (2 * ax2))
    let x2 = ((-bx - Math.sqrt(Delta)) / (2 * ax2))
    let Bhaskara = [x1, x2]
    return Bhaskara
  }
}

console.log(equacao(3, -5, 12))
console.log(equacao(10, 10, 10))
console.log(equacao(2, 10, 5))
console.log(equacao(1, 12, -13))
console.log(equacao(2, -16, -18))
