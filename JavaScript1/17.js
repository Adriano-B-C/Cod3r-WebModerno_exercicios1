// CERTO


const carreira = function (plano, salário) {
  switch (plano) {
    case 'A':
      return salário + salário * 0.1
    case 'B':
      return salário + salário * 0.15
    case 'C':
      return salário + salário * 0.2
    default:
      return 'Plano Inválido'
  }
}

console.log(carreira('A', 1000))
console.log(carreira('B', 1000))
console.log(carreira('C', 1000))
console.log(carreira('D', 1000))
