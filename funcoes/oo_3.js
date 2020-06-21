// Funcao Construtora
function Produto(nome, preco, desc = 0.5){
  this.nome = nome
  this.preco = preco
  this._desc = desc

  this.precoFinal = function(){
    return this.preco * (1 - this._desc)
  }
}

Produto.prototype.log = function(){
  console.log(`Nome: ${this.nome} -> Preço: R$ ${this.preco} -> Desc: R$ ${this.desc}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function(){
    return this._desc
  },
  set: function(novoDesc){
    if(novoDesc >= 0 && novoDesc <= 1){
      this._desc = novoDesc
    }
  }
})

Object.defineProperty(Produto.prototype, 'descString', {
  get: function(){
    return `${this._desc * 100}% de desconto`
  }
})

const p1 = new Produto('Caneta', 8.59)
//console.log(p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 2500)
p2.log()