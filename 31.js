// CERTO

const negativos = function (valores = [-1, 0, 1]) {
  this.numerosNegativos = 0
  if (isNaN(valores) != true) {
    return console.log(
      `ERRO - Valor não suportado passado como argumento, uso: [$valoreNúmerico1, $valoreNúmerico2, ...]`
    )
  }
  for (i in valores) {
    if (isNaN(valores[i])) {
      return console.log(
        `ERRO - Valor não suportado passado como argumento, uso: [$valoreNúmerico1, $valoreNúmerico2, ...]`
      )
    }
    if (valores[i] < 0) {
      this.numerosNegativos++
    }
  }
  console.log(`${this.numerosNegativos} números negativos na lista`)
}

negativos()
negativos([1, 2, 3])
negativos([3, 2, -1])
negativos([3, -2, -1])
negativos([0, -2, -1])
negativos([-1, -1, -1])
negativos(['a', -1, -1])
negativos([-1, 'a', -1])
negativos('a', -1, -1)
negativos(-1, 'a', -1)
