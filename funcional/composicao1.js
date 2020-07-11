function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}

function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  return `${texto}!!!!`
}

function tonarLento(texto) {
  return texto.split('').join(' ')
}

const exagerado = composicao(gritar, enfatizar, tonarLento)
const umPoucoMenosExagerado = composicao(gritar, enfatizar)

const resultado1 = exagerado('para')
const resultado2 = umPoucoMenosExagerado('continue amigo')

console.log(resultado1)
console.log(resultado2)
