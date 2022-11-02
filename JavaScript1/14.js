// CERTO


const fruteira = function (fruta) {
  switch (fruta) {
    case 'maçã': return 'Não vendemos esta fruta aqui'
    case 'kiwi': return 'Estamos com escassez de kiwis'
    case 'melancia': return 'Aqui está, são 3 reais o quilo'
    default: return 'ERRO - Especifique uma fruta: maçã, kiwi, melancia'
  }
}

console.log(fruteira('maçã'))
console.log(fruteira('kiwi'))
console.log(fruteira('melancia'))
console.log(fruteira('limão'))
console.log(fruteira())