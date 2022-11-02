// CERTO

const impares = function (inicio = 0, fim = 100) {
  if (isNaN(inicio) || isNaN(fim)) {
    return console.log('ERRO - Valor invalido passado como parametro')
  }
  let inicioLista = inicio
  let fimLista = fim
  if (inicio > fim) {
    inicioLista = fim
    fimLista = inicio
  }
  this.lista = []
  for (let i = inicioLista; i <= fimLista; i++) {
    if (i % 2 != 0) {
      this.lista.push(i)
    }
  }
  console.log(this.lista)
}

impares()
impares(10, 30)
impares(30, 10)
impares(30, 'a')