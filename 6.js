// CERTO


const jurosSimples = function (
  capitalInicial = 1,
  taxaDeJuros = 0.01,
  tempo = 10
) {
  let Juros = capitalInicial * taxaDeJuros * tempo
  let montante = Juros + capitalInicial
  return montante
}

const jurosComposto = function (
  capitalInicial = 1,
  taxaDeJuros = 0.1,
  tempo = 10
) {
  let montante = capitalInicial * (taxaDeJuros + 1) ** tempo
  return Math.round(montante)
}

console.log(jurosSimples(1200, 0.02, 14))
console.log(jurosComposto(620, 0.015, 24))
