const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')

// -> Lendo Arquivos do Diretório
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs
        .readdirSync(caminho)
        .map((arquivo) => path.join(caminho, arquivo))
      resolve(arquivos)
    } catch (error) {
      reject(error)
    }
  })
}

// -> Lendo Conteúdo dos Arquivos

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
      resolve(conteudo.toString())
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)))
}

// -> Filtrando Arquivos por Extensão

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual))
  }
}

// -> Remover Linhas vazias

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim())
}

// -> Remover se Incluir

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual))
  }
}

// -> Remover se apenas valor numerico

function removerElementosSeApenasValorNumerico(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

// -> Remover simbolos

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('')
      }, el)
    })
  }
}

function mesclarElementos(array) {
  return array.join(' ')
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase()
      const qtde = acc[el] ? acc[el].qtde + 1 : 1
      acc[el] = { elemento: el, qtde }

      return acc
    }, {})
  )
}

function ordernarPorAtriNumerico(attr, ordem = 'asc') {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return [...array].sort(ordem === 'asc' ? asc : desc)
  }
}

function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasValorNumerico,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtriNumerico,
  composicao,
}
