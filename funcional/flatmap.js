const letrasAninhadas = [['o', ['l'], 'á'], [' '], ['m', 'u', ['n', 'd'], 'o']]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
  .flatMap((lt => lt.toUpperCase()))
  .reduce((a, b) => a + b)

console.log(resultado)
