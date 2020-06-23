const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')

// -> Lendo Arquivos do Diretório
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho)
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo))
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

// -> Remover Linhas vazias

function removerSeVazio(array){
  return array.filter(el => el.trim())
}

// -> Filtrando Arquivos por Extensão

function elementosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao))
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerSeVazio
}
