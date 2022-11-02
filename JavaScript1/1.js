// CORRETO

const operações = function (valor1 = 1, valor2 = 1) {
  console.log(`Adição: ${valor1 + valor2}`)
  console.log(`Subtração: ${valor1 - valor2}`)
  console.log(`Multiplicação: ${valor1 * valor2}`)
  console.log(`Divisão: ${valor1 / valor2}`)
}

operações(10, 2)
