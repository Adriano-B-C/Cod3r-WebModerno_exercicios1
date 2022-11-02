// CERTO


const getIntervalo = function(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) return (numero >= minimo && numero <= maximo)
  return (numero > minimo && numero < maximo)
}

// Irá retornar o valor da operação (Assim como 1==0 tem o valor de 'False', se definir o retorno '1==0', é o mesmo que retornar 'False')

console.log(getIntervalo(50, 10, 100)) // True
console.log(getIntervalo(16, 100, 160)) // False
console.log(getIntervalo(3, 3, 150)) // False
console.log(getIntervalo(3, 3, 150, true)) // True