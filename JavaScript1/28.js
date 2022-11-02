// CERTO

const paresImpares = function (numeros = [1, 2]) {
  this.pares = 0
  this.impares = 0
  for (i in numeros) {
    if (isNaN(numeros[i]) == true) {
      return 'ERRO - Valores não numéricos passados como argumento'
    }
    if (numeros[i] % 2 == 0) {
      this.pares++
    } else if (numeros[i] % 2 != 0) {
      this.impares++
    }
  }
  return `Existem ${this.impares} números impares, e existem ${this.pares} números pares.`
}

console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(paresImpares([1, 'a', 3, 4, 5, 6, 7, 8, 9]))
console.log(paresImpares([]))
console.log(paresImpares([-1, 1]))
console.log(paresImpares([-2, 1]))
