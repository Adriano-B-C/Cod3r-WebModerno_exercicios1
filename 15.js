// CERTO

const revenda = function (veiculo) {
  switch (veiculo) {
    case 'hatch':
      return 'Compra efetuada com sucesso'
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?'
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
  }
}

console.log(revenda('hatch'))
console.log(revenda('sedan'))
console.log(revenda('motocicleta'))
console.log(revenda('caminhonete'))
console.log(revenda('bike'))
console.log(revenda())
