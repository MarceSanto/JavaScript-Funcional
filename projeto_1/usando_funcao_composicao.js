const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '-',
  '?',
  '-',
  '_',
  '"',
  '<i>',
  '♪',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
]

fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom('.srt'),
  fn.lerArquivos,
  fn.mesclarElementos,
  fn.separarTextoPor('\n'),
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir('-->'),
  fn.removerElementosSeApenasValorNumerico,
  fn.removerSimbolos(simbolos),
  fn.mesclarElementos,
  fn.separarTextoPor(' '),
  fn.removerElementosSeVazio,
  fn.removerElementosSeApenasValorNumerico,
  fn.agruparElementos,
  fn.ordernarPorAtriNumerico('qtde', 'desc'),
  console.log
)(caminho)
