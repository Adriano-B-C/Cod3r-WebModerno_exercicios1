// CERTO

const isBissexto = ano =>  !((ano % 4) + ((ano % 100) - (ano % 400)))

console.log(isBissexto(2020))
console.log(isBissexto(2100))
console.log(isBissexto(4))
console.log(isBissexto(100))
console.log(isBissexto(400))
