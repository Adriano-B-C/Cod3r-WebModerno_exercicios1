// CERTO

const getOposto = function (valor) {
  if (typeof valor !== 'boolean' || typeof valor !== 'number') {
    return `Booleano ou numero esperados, mas o parâmetro é do tipo: ${typeof valor}` 
  }
  if (typeof valor == 'boolean') {
  return !valor
  } else if (typeof valor == 'number') {
    return -valor
  }
}

console.log(getOposto(2))
console.log(getOposto(true))
console.log(getOposto('a'))