const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
]

// 1. fragil: true
//const eFragil = (el) => el.fragil
//const resulT = carrinho.filter(eFragil)
//console.log(resulT)

// 2. qtde: 4, preco: 27.10 -> total
//const totais = (t) => t.qtde * t.preco
//const reSul = carrinho.map(totais)
//console.log(reSul)

//3. media totais
const eFragil = (el) => el.fragil
const totais = (t) => t.qtde * t.preco
const reSul = carrinho
  .filter(eFragil)
  .map(totais)
  .reduce((acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
      qtde: novaQtde,
      total: novoTotal,
      media: novoTotal / novaQtde
    }
  }, { qtde: 0, total: 0, media: 0 })

console.log(reSul)
