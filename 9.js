// CERTO

let CalculoNotas = function (nota = 0) {
  if (nota >= 38) {
    let nota1 = nota / 5
    let nota2 = (Math.floor(nota1) + 1) * 5
    nota1 *= 5
    notaArredonda = nota2 - nota1
    if (notaArredonda < 3) {
      notaArredonda = nota2
    } else if (notaArredonda >= 3) {
      notaArredonda = nota1
    }
    return `Nota: ${notaArredonda}. APROVADO(A)`
  }
  return `Nota: ${nota}. Nota Insuficiente - REPROVADO(A)`
}

console.log(CalculoNotas())
console.log(CalculoNotas(29))
console.log(CalculoNotas(38))
console.log(CalculoNotas(42))
console.log(CalculoNotas(45))
console.log(CalculoNotas(49))
console.log(CalculoNotas(99))
console.log(CalculoNotas(100))
console.log(CalculoNotas(1))
