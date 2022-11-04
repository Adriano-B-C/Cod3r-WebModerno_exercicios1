// CERTO

const removerPropriedade = function (obj, prop) {
  const objNovo = Object.assign(obj)
  delete objNovo[prop]
  return objNovo
}

console.log(removerPropriedade({ a: 1, b: 2 }, 'a'))
console.log(
  removerPropriedade(
    {
      id: 20,
      nome: 'caneta',
      descricao: 'Não preenchido'
    },
    'descricao'
  )
)
