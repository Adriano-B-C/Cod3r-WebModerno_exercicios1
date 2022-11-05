// CERTO


const getSegundoMaior = function (lista = []) {
  let ordenada = [...lista]
  ordenada.sort((a, b) => b - a)
  return ordenada[1]
}


console.log(getSegundoMaior([5, 1, 2, 4, 3]))
console.log(getSegundoMaior([12, 16, 1, 5]))
console.log(getSegundoMaior([8, 4, 5, 6]))