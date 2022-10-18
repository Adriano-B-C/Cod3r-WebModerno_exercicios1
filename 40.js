// CERTO


const conceitos = function (notas = [1, 5, 7, 9]) {
  this.listaConceitos = []
  for (i in notas) {
    if (isNaN(notas[i])) {
      return `NOTA INVÁLIDA NA POSIÇÃO ${i}`
    }
    if (notas[i] < 0 || notas[i] > 10) {
      return `NOTA INVÁLIDA NA POSIÇÃO ${i}`
    }
    if (notas[i] <= 4.9) {
      this.listaConceitos.push('D')
    }
    if (notas[i] >= 5 && notas[i] <= 6.9) {
      this.listaConceitos.push('C')
    }
    if (notas[i] >= 7 && notas[i] <= 8.9) {
      this.listaConceitos.push('B')
    }
    if (notas[i] >= 9) {
      this.listaConceitos.push('A')
    }
  }
  return this.listaConceitos
}

console.log('----------------------------------')
console.log(conceitos())
console.log('----------------------------------')
console.log(conceitos([10, 9, 7, 2, 5, 3, 8, 1]))
console.log('----------------------------------')
console.log(conceitos(['a']))
console.log('----------------------------------')
console.log(conceitos([10, 9, 7, 2, 5, 3, 8, 'a']))
console.log('----------------------------------')
console.log(conceitos([10, 9, 7, 2, 5, 3, 8, 11]))
console.log('----------------------------------')
console.log(conceitos([10, 9, 7, 2, -5, 3, 8, 1]))
console.log('----------------------------------')
