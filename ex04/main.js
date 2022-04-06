function obterElemento () {
  let elemento = document.getElementById('elemento').value

  // valida 

  if (elemento === '') {
    alert('Preencha o campo com uma palavra')
  }
  let elementoObtido
  elemento = elementoObtido


  var elementos = document.getElementById(elementoObtido).value

  let outputElemento = document.getElementById('outputElemento')
  outputElemento.value = elementoObtido
}