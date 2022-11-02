// CERTO

const deJaVu = function(elem, rep) {
  let resultado = []
  for (let i = 0; i < rep; i++) {
    resultado.push(elem)
  }
  return resultado
}

console.log(deJaVu(1, 2))
console.log(deJaVu('a', 3))
console.log(deJaVu('Gato preto', 2))
console.log(deJaVu(['haha'], 3))