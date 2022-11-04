// CERTO

const filtrarNumero = function (lista = []) {
  return lista.filter( e => typeof e == 'number' )
}

console.log(filtrarNumero([1,2,3,4]))
console.log(filtrarNumero(['a',2,3,4]))
console.log(filtrarNumero([1,'a',3,4]))
console.log(filtrarNumero([1,2,'a',4]))
console.log(filtrarNumero([1,2,3,'a']))
console.log(filtrarNumero(['a','a','a','a']))
console.log(filtrarNumero([[1,'a'], 'a', true, {a: 1}]))