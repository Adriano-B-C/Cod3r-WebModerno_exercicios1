// CERTO

const associação = function(mes = 1, preco = 100) {
  let atraso = mes - 1 
  let juros = preco * ((0.05 + 1) ** atraso)
  return Math.round(juros) 
}

console.log(associação(1, 100))
console.log(associação(2, 100))
console.log(associação(12, 100))
console.log(associação(11, 500))