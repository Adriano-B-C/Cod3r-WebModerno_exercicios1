// CERTO


const divisivelPor3 = function (x = 0) {
  let dividido = x / 3
  if (dividido - Math.trunc(dividido) == 0) return true
  else return false
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(4))
