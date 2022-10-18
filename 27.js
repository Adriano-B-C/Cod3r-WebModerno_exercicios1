// CERTO


const desenvolvimento = function (
  altura1 = 100,
  altura2 = 100,
  taxaCrescimento1 = 5,
  taxaCrescimento2 = 5
) {
  if (
    isNaN(altura1) == true ||
    isNaN(altura2) == true ||
    isNaN(taxaCrescimento1) == true ||
    isNaN(taxaCrescimento2) == true
  ) {
    return `ERRO - Valores inválidos. USO: altura criança 1, altura criança 2, Taxa de crescimento criança 1, Taxa de crescimento criança 2`
  }
  if (altura1 == altura2) {
    return 'As crianças tem o mesmo tamanho'
  }

  let criança1 = [altura1, taxaCrescimento1]
  let criança2 = [altura2, taxaCrescimento2]
  this.tempo = 0

  let menor = Math.min(altura1, altura2)

  if (menor == criança1[0] && criança1[1] > criança2[1]) {
    this.tempo = (criança2[0] - criança1[0]) / criança1[1]
  } else if (menor == criança2[0] && criança2[1] > criança1[1]) {
    this.tempo = (criança1[0] - criança2[0]) / criança2[1]
  } else return 'A criança menor não ira ultrapassar a maior'

  if (this.tempo > 0) {
    return `A criança menor irá ultrapassar a maior em: ${this.tempo} anos`
  } else if (this.tempo <= 0) {
    return 'A criança menor não ira ultrapassar a maior'
  }
}

console.log(desenvolvimento())
console.log(desenvolvimento(120, 130, 10, 0))
console.log(desenvolvimento(120, 130, 0, 10))
console.log(desenvolvimento(131, 130, 2, 3))
console.log(desenvolvimento('a', 130, 10, 0))
console.log(desenvolvimento(120, 'a', 5, 6))
console.log(desenvolvimento(120, 130, 'a', 6))
console.log(desenvolvimento(120, 130, 5, 'a'))
console.log(desenvolvimento(149, 150, 3, 2))
