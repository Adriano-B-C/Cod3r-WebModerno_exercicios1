// CERTO

let pares = []
for (let i = 0; i <= 100; i++) {
  if (Number.isInteger(i / 2)) {
    pares.push(i)
  }
}
console.log(pares)
