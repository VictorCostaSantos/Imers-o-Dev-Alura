var tipoImagem = ['.jpg','.png','.bmp','.gif']
var todosFilmes = ["django Livre","Matilda","Um sonho de liberdade","As branquelas"]
var todosImagens = ["https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg","https://br.web.img2.acsta.net/c_310_420/pictures/210/123/21012312_20130613132958221.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/90/16/48/20083748.jpg","https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg"]
var todosTrailers = ["https://www.youtube.com/watch?v=tivv135aGbc","https://www.youtube.com/watch?v=QD12PO3cTug","https://www.youtube.com/watch?v=v1nZq1vfgSw","https://www.youtube.com/watch?v=z7fOQZWJyQA"]
var elementoListaFilmes = document.getElementById("listaFilmes")
var id = null

mostrarFilme()

function adicionarFilme(){
  var nomeFilme = document.getElementById('nome').value
  var cartazFilme = document.getElementById('filme').value
  var trailerFilme = document.getElementById('trailer').value
  
 if((testaImagem(cartazFilme))==1){
    todosFilmes.push(nomeFilme)
    todosImagens.push(cartazFilme)
    todosTrailers.push(trailerFilme)
    limparCampos()
  } else{
    alert('O link não é de uma imagem')
    limparCampos()
  }
  mostrarFilme()
}

function testaImagem(cartazFilme){
  for(var i =0; i<tipoImagem.length; i++){
    if(cartazFilme.endsWith(tipoImagem[i])){
      return 1
    }
  }
}

function mostrarFilme(){
  elementoListaFilmes.innerHTML = ''
  var lista=''
  for(var j=0; j<todosFilmes.length; j++){
    lista += '<div class="listaFilmes" >'
    lista += '<div class="itens"><div class="titulo"><h3>'+todosFilmes[j]+'</h3> </div>'
    lista += '<a target=_blank href='+todosTrailers[j]+'>'
    lista += '<button style="margin:-1% 0% 0% 13%" class="remove" onClick="removerFilme('+ j +')">X</button>'
    lista += '<img class="imgs" src='+todosImagens[j]+'></a> </div>'
    lista += '</div>'
    
    elementoListaFilmes.innerHTML = lista
  }
}
  
function removerFilme(id)
{
  todosImagens.splice(id, 1)
  todosTrailers.splice(id, 1)
  todosFilmes.splice(id, 1)
  mostrarFilme()
}

function limparCampos(){
  document.getElementById('nome').value = null
  document.getElementById('filme').value = null
  document.getElementById('trailer').value = null
}