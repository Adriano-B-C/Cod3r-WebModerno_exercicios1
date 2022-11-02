//CERTO

const duplicidade = function (palavra1 = 'lobo', palavra2 = 'bolo') {
  this.maior
  this.menor
  this.totalIgual = 0
  if (palavra1.length >= palavra2.length) {
    this.maior = palavra1
    this.menor = palavra2
  } else if (palavra2.length > palavra1.length) {
    this.maior = palavra2
    this.menor = palavra1
  }

  for (i in this.maior) {
    if (this.menor.indexOf(this.maior.charAt(i)) == -1) {
      return false
    } else if (this.menor.indexOf(this.maior.charAt(i)) != -1) {
      this.totalIgual++
    }
  }
  return true
}

console.log(duplicidade()) // true
console.log(duplicidade('ola', 'ola')) // true

console.log(duplicidade('ola', 'olaa')) // true
console.log(duplicidade('olaa', 'ola')) // true

console.log(duplicidade('alo', 'ola')) // true
console.log(duplicidade('ola', 'alo')) // true

console.log(duplicidade('olac', 'ola')) // false
console.log(duplicidade('ola', 'olac')) // false

console.log(duplicidade('ola', 'olc')) // false
console.log(duplicidade('olc', 'ola')) // false

console.log(duplicidade(1, 'ola')) // false
console.log(duplicidade('ola', 1)) // false

console.log(duplicidade('ola', '1')) // false
console.log(duplicidade('1', 'ola')) // false

console.log(duplicidade('', 'ola')) // false

console.log(duplicidade(1, 1)) // false
