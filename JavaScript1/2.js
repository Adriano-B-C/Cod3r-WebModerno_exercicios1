// CERTO

//Equilátero: Os três lados são iguais
//Isósceles: Dois lados iguais
//Escaleno: Todos os lados são diferentes

const triangulo = function (lado1 = 1, lado2 = 1, lado3 = 1) {
  let definicao = 'O triangulo é Escaleno'

  if (lado1 == lado2 || lado1 == lado3) {
    definicao = 'O triangulo é Isósceles'
    if (lado2 == lado3) {
      definicao = 'O triangulo é Equilátero'
    }
  } else if (lado2 == lado3) {
    definicao = 'O triangulo é Isósceles'
  }
  return definicao
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 2, 3))
console.log(triangulo(3, 2, 2))
console.log(triangulo(2, 3, 4))
console.log(triangulo())
