const nums = [1, 2, 3, 4, 5]
const dobro = (n) => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Rafa', 'Lia', 'Guia']
const primeiraLetra = (texto) => texto[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
]

// const getNome = (item) => item.nome
// console.log(carrinho.map(getNome))

// const getTotal = (item) => item.qtde * item.preco
// console.log(carrinho.map(getTotal))

Array.prototype.meuMap = function (fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this))
  }
  return novoArray
}

const getNome = (item) => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = (item) => item.qtde * item.preco
console.log(carrinho.meuMap(getTotal))
