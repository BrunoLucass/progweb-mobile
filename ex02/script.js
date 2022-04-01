buttonRealDol.disabled = true
buttonDolReal.disabled = true

var dolares = 0

function obterTaxa() {
  let taxaDeConversao = document.getElementById('taxaConversao').value

//valida

  if (taxaDeConversao === '') {
    alert('Preencha a taxa de conversão para continuar!')
  }
  let taxaConfirmada
  taxaDeConversao = taxaConfirmada

  let buttonDolReal = document.getElementById('buttonDolReal')
  buttonDolReal.disabled = false
  let buttonRealDol = document.getElementById('buttonRealDol')
  buttonRealDol.disabled = false

  let confirmTax = document.getElementById('confirmTax')
  confirmTax.disabled = true
}

function conversorRealDolar() {
  let taxaDeConversao = document.getElementById('taxaConversao').value
  let validaReal = document.getElementById('reais').value

  //acessar o que foi digitado
  var reais = document.getElementById('reais').value

  //converter de string para float
  reais = parseFloat(reais)

  // valida 
  if (validaReal === '') {
    alert('Preencha a a quantia de reais para continuar!')
  }
  //converter para dolares
  dolares = reais / taxaDeConversao
  let outputReal = document.getElementById('outputReal')

  outputReal.value = dolares
}

var reals = 0
function conversorDolarReal() {
  let taxaDeConversao = document.getElementById('taxaConversao').value
  let validaDolar = document.getElementById('dolar').value
  //acessar o que foi digitado
  var dolar = document.getElementById('dolar').value

  //converter de string para float
  dolar = parseFloat(dolar)

  // valida 
  if (dolar === '') {
    alert('Preencha a a quantia de reais para continuar!')
  }

  //converter para dolares
  reals = dolar * taxaDeConversao

  let outputDolar = document.getElementById('outputDolar')
  outputDolar.value = reals
}

function limpaInput() {
  let taxaDeConversao = document.getElementById('taxaConversao')
  taxaDeConversao.value = ''
  let dolar = document.getElementById('dolar')
  dolar.value = ''
  let reais = document.getElementById('reais')
  reais.value = ''
  let outputDolar = document.getElementById('outputDolar')
  outputDolar.value = ''
  let outputReal = document.getElementById('outputReal')
  outputReal.value = ''

  let confirmTax = document.getElementById('confirmTax')
  confirmTax.disabled = false

  let buttonDolReal = document.getElementById('buttonDolReal')
  buttonDolReal.disabled = true
  let buttonRealDol = document.getElementById('buttonRealDol')
  buttonRealDol.disabled = true
}
