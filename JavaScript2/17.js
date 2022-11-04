// CERTO

const somaTodos = arr => arr.reduce((acc, val) => (acc += val))

console.log(somaTodos([10, 10, 10]))
console.log(somaTodos([15, 15, 15, 15]))
