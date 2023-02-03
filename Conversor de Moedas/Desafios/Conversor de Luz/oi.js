var form = document.getElementById("formulario");
var campo = document.getElementById("campo");
var result = document.getElementById("screen");

form.addEventListener("submit", function (e) {
  var valorQuilometroEmNumero = parseFloat(campo.value);
  var valorEmAnosLuz = (0.0000000000001057).toFixed(17);
  result.value = valorQuilometroEmNumero * valorEmAnosLuz;

  e.preventDefault();
});
