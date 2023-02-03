// Mundo HTML
var campo = document.querySelector("#input-text")
var titulo = document.getElementById("input-nome")
var link = document.querySelector("#input-link")


var Valida = document.getElementById("texto");
var mural = document.getElementById("mural")

//efeitocarta

var carta = document.getElementsByClassName("carta")
var frente = document.getElementById("frente")
var back = document.getElementById("back")

// Fim mundo HTML

var listaFilmes = [];
var i = 0;

while(i < listaFilmes.length)
{
        document.write("<img src=" + listaFilmes[i] + ">");       
        i++       
}
 i = listaFilmes.length

function Inserir(){
    
     if(listaFilmes.includes(campo.value)) {
        alert("O filme já existe na lista");
      }else if(campo.value.endsWith(".jpg") ||
    campo.value.endsWith(".JPG") ||
    campo.value.endsWith(".jpeg") ||
    campo.value.endsWith(".JPEG") ||
    campo.value.endsWith(".gif") ||
    campo.value.endsWith(".GIF") ||
    campo.value.endsWith(".png") ||
    campo.value.endsWith(".PNG") ||
    campo.value.endsWith(".svg") ||
    campo.value.endsWith(".SVG") ||
    campo.value.endsWith(".bmp") ||
    campo.value.endsWith(".BMP") ||
    campo.value.endsWith(".webp") ||
    campo.value.endsWith(".WEBP") ){

      listaFilmes.push(campo.value);
        mural.innerHTML += `<div class="padrao">
        <input type="button" id="deletar" value="Remover" onclick="deletar()"><a href="${link.value}"><img src="${listaFilmes[i]}"></a>
        <h3>${titulo.value}</h3>      
        </div>`;
        i ++ 
        
      }
      else{
        alert("Não aceitamos esse formato")
      }

      campo.value = ""

} 

function deletar(){

}



