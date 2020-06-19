
let a = 4
console.log(a)

// Function Declaration
function bomDia(){
  console.log('Bom dia')
}

bomDia()

// Function expression
const boaTarde = function (){
  console.log('Boa Tarde!')
}

boaTarde()

function somar(a = 0, b = 0){
  return a + b
}

let resultado = somar(4, 5)
console.log(resultado)

resultado = somar(4, 6, 7, 8)
console.log(resultado)

resultado = somar(4)
console.log(resultado)

resultado = somar()
console.log(resultado)