//CERTO

const troca = function (vetorA = [1, 2, 3], vetorB = [4, 5, 6]) {
  if (vetorA.length != vetorB.length) {
    return console.log('ERRO - Vetores de tamanho diferente')
  }
  vetorA = vetorA.concat(vetorB)
  vetorB = vetorB.concat(vetorA)
  vetorB = vetorB.splice(
    vetorB.length - vetorA.length,
    vetorB.length - vetorA.length
  )
  vetorA = vetorA.splice(
    vetorA.length - vetorB.length,
    vetorA.length - vetorB.length
  )
  console.log(vetorA)
  console.log(vetorB)
}

troca()
console.log('---------------------------------------------')
troca(['A', 'B', 'C'], ['D', 'E', 'F'])
console.log('---------------------------------------------')
troca([1, 2, 3, 4], [5, 6, 7])
console.log('---------------------------------------------')
troca(['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'])
console.log('---------------------------------------------')
troca(['A', 'B', 'C', 'D'])
console.log('---------------------------------------------')
