// -> somar(3)(4)(5)

function somar(a) {
  return function(b){
    return function(c){
      return a + b + c
    }
  }
}

const resul = somar(3)(4)(5)
console.log(resul)

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// -> calcular(3)(7)(fn)

function som(a, b){
  console.log(a + b)
}

function sb(a, b){
  console.log(a - b)
}

function smu(a, b){
  console.log(a * b)
}

function calcular(a){
  return function(b){
    return function(fn){
      fn(a, b)
    }
  }
}

calcular(3)(7)(som)
calcular(3)(7)(sb)
calcular(3)(7)(smu)