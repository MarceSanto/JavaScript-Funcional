// arrow function

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao = (nome) => `Fala ${nome}, blz!?!`
console.log(saudacao('Marcello'))

const somar = (...array) => {
  let soma = 0
  for (let n of array) {
    soma += n
  }
  return soma
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9))
