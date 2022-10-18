// CERTO

const planoDeSaude = function (idade) {
  let taxa = 100
  if (isNaN(idade) != true) {
    if (idade < 10) {
      taxa += 80
    }
    if (idade >= 10 && idade <= 30) {
      taxa += 50
    }
    if (idade > 30 && idade <= 60) {
      taxa += 95
    }
    if (idade > 60) {
      taxa += 130
    }
    return `R$${taxa}`
  }
  return 'Idade Inválida'
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(10))
console.log(planoDeSaude(11))
console.log(planoDeSaude(29))
console.log(planoDeSaude(30))
console.log(planoDeSaude(31))
console.log(planoDeSaude(59))
console.log(planoDeSaude(60))
console.log(planoDeSaude(61))
