// CERTO

const avaliacao = function (cod = 1, nota1 = 1, nota2 = 1, nota3 = 1) {
  if (cod < 0 || isNaN(cod) == true) {
    console.log('ERRO - CÓDIGO DO ALUNO INVÁLIDO')
    return
  }
  if (nota1 < 0 || isNaN(nota1) == true) {
    console.log('ERRO - NOTA 1 INVÁLIDA')
    return
  }
  if (nota2 < 0 || isNaN(nota2) == true) {
    console.log('ERRO - NOTA 2 INVÁLIDA')
    return
  }
  if (nota3 < 0 || isNaN(nota3) == true) {
    console.log('ERRO - NOTA 3 INVÁLIDA')
    return
  }
  let maior = Math.max(nota1, nota2, nota3)
  let menores = nota1 + nota2 + nota3 - maior
  let media = (maior * 4 + menores * 3) / (4 + 3 + 3)
  if (media >= 5) {
    console.log(
      `ALUNO: ${cod} - |1° NOTA: ${nota1}| |2° NOTA: ${nota2}| |3° NOTA: ${nota3}| |MÉDIA: ${media}| "APROVADO"`
    )
  } else if (media < 5) {
    console.log(
      `ALUNO: ${cod} - |1° NOTA: ${nota1}| |2° NOTA: ${nota2}| |3° NOTA: ${nota3}| |MÉDIA: ${media}| "REPROVADO"`
    )
  }
}

avaliacao('a', 5, 2, 3)
avaliacao(-1, 5, 2, 3)
avaliacao(1, -1, 2, 3)
avaliacao(2, 1, 'a', 3)
avaliacao(2, 1, 2, 'a')
avaliacao(1, 1, 1, 1)
avaliacao(2, 10, 1, 1)
avaliacao(3, 5, 6, 3)
avaliacao(4, 1, 10, 10)
avaliacao(5, 10, 5, 2)
