// CERTO


// MINHA SOLUÇÃO
const removerVogais = function(str) {
  let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return str.split('').filter(cs => vogais.every(vg => vg != cs)).join('')
}

// SOLUÇÃO DO CURSO
const removerVogaisMELHOR = frase => frase.replace(/[aeiou]/ig, '')


console.log(removerVogais('abcABC'))
console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))

console.log(removerVogaisMELHOR('abcABC'))
console.log(removerVogaisMELHOR('Cod3r'))
console.log(removerVogaisMELHOR('Fundamentos'))

