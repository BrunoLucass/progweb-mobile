console.log('hello!')
vezes = 0
vezes2 = 0
function executaAcao(id){
  var resultado = document.getElementById(id)
  if(id=="name"){
    vezes += 1
    resultado.innerHTML = vezes
  }else{
    vezes2 += 1
    resultado.innerHTML = vezes2
  }
}

function zerar (id){
  var resultado = document.getElementById(id)
  if(id=="name"){
    vezes = -1
    resultado.innerHTML = vezes
  }else{
    vezes2 = -1
    resultado.innerHTML = vezes2
  }
}

// document.getElementById('botao').onclick = zerar;