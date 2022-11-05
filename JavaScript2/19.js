// CERTO

const calcularMedia = arr => arr.reduce((acc, e) => (acc += e)) / arr.length

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))
