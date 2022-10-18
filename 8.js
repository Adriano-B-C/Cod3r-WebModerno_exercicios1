// CERTO

let pontosString = '10 20 20 8 25 3 0 30 1'
const desempenho = function (pontos) {
  let pontosArray = pontos.split(' ')
  let melhor = pontos[0]
  let pior = 0
  let recordes = 0
  for (i in pontosArray) {
    if (pontosArray[i] < pontosArray[pior]) {
      pior = [i]
    } else if (pontosArray[i] > melhor) {
      melhor = pontosArray[i]
      recordes++
    }
  }
  pior++
  return [recordes, pior]
}

console.log(desempenho(pontosString))
