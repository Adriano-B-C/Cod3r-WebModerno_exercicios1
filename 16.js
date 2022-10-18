// CERTO

const calculadora = function (x, operação, y) {
  switch (true) {
    case isNaN(x) == true || isNaN(y) == true:
      return 'ERRO - Operação inválida'
  }
  switch (operação) {
    case '+':
      return x + y
    case '-':
      return x - y
    case '*':
      return x * y
    case '/':
      return x / y
    default:
      return 'ERRO - Operação inválida'
  }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, '/', 2))
console.log(calculadora())
console.log(calculadora('a', '+', 2))
console.log(calculadora('2a', '+', 2))
console.log(calculadora('/', '+', '/'))
console.log(calculadora('.,;', '-', [2]))
