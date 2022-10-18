// CERTO

const diaDaSemana = function (dia) {
  switch (dia) {
    case 7:
      return 'Fim de Semana'
    case 6:
      return 'Dia útil'
    case 5:
      return 'Dia útil'
    case 4:
      return 'Dia útil'
    case 3:
      return 'Dia útil'
    case 2:
      return 'Dia útil'
    case 1:
      return 'Fim de Semana'
    default:
      return 'Dia Inválido'
  }
}

console.log(diaDaSemana(1))
console.log(diaDaSemana(2))
console.log(diaDaSemana(3))
console.log(diaDaSemana(4))
console.log(diaDaSemana(5))
console.log(diaDaSemana(6))
console.log(diaDaSemana(7))
console.log(diaDaSemana())
console.log(diaDaSemana(8))
