// CERTO

const contagem = function (valores = [1, 2, 10, 11, 20, 21]) {
  this.dentro = 0
  this.fora = 0
  for (i in valores) {
    if (isNaN(valores[i])) {
      return 'ERRO - Valor não suportado passado como argumento, uso: [$valoreNúmerico1, $valoreNúmerico2]'
    }
    if (valores[i] >= 10 && valores[i] <= 20) {
      this.dentro++
    } else {
      this.fora++
    }
  }
  return `Há ${this.dentro} elementos dentro do intervalo "[10,20]" e ${this.fora} fora do intervalo.`
}

console.log(contagem())
console.log(contagem([2]))
console.log(contagem([10]))
console.log(contagem([15]))
console.log(contagem([20]))
console.log(contagem([21]))
console.log(contagem([2, 10, 15, 20, 21]))
console.log(contagem(['a', 2, 10, 15, 20, 21]))
