// CERTO

const objetoParaArray = obj => Object.entries(obj)

console.log(objetoParaArray({a: 1, b: 2, c: 3}))
console.log(objetoParaArray({
  nome: 'Maria',
  profissao: 'Desenvolvedora de Software'
}))
console.log(objetoParaArray({
  codigo: 11111,
  preco: 12000
}))