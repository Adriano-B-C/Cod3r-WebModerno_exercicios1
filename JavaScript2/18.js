// CERTO


const despesasTotais = arr => arr.map(e => e.preco).reduce((e, i) => e += i, 0)

console.log(
  despesasTotais([
    { nome: 'Jornal Online', categoria: 'Informação', preco: 89.99 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
  ])
)
console.log(
  despesasTotais([
    { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
    { nome: 'Macbook PRO', categoria: 'Eletrônicos', preco: 30999.9 }
  ])
)
