// CERTO

const mediaArt = function (valores = [1, 2, 3]) {
  let numeros = Object.values(valores)
  let dividendo = 0
  let divisor = 0
  for (i in numeros) {
    if (isNaN(numeros[i])) {
      return 'ERRO - Valor inválido passado como parametro'
    }
    dividendo += numeros[i]
    divisor++
  }
  if (isNaN(dividendo / divisor)) {
    return 'ERRO - Valor inválido passado como parametro'
  }
  return dividendo / divisor
}

console.log(mediaArt([2, 2, 2]))
console.log(mediaArt([1, 5, 10]))
console.log(mediaArt([5, 10, 15, 20, 25, 30, 35]))
console.log(mediaArt(5, 10, 15, 20, 25, 30, 35))
console.log(mediaArt('a'))
console.log(mediaArt(['a']))
console.log(mediaArt(1, 2, 'a'))
console.log(mediaArt([1, 2, 'a']))
console.log(mediaArt())
