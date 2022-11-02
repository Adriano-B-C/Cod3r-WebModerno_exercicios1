// CERTO

const fatorial = function (x) {
  let total = x
  for (let i = x - 1; i != 0; i--) {
    total = total * i
  }
  return total
}

console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
