// CERTO

// MINHA SOLUÇÃO 1
const inverter = function (objOriginal) {
  let subArrays = Object.entries(objOriginal)
  subArrays.forEach(e => e.reverse())
  return Object.fromEntries(subArrays)
}

// MINHA SOLUÇÃO 2
const inverter2 = function (objOriginal) {
  return Object.fromEntries(
    Object.entries(objOriginal).map(([chave, valor]) => [valor, chave])
  )
}

console.log(inverter({ a: 1, b: 2, c: 3 }))
console.log(inverter2({ a: 1, b: 2, c: 3 }))
console.log({ 1: 'a', 2: 'b', 3: 'c' }) // Em todos os casos, até por declaração explicita, a chave numeral sempre tera ''
