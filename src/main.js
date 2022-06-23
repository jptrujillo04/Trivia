/*
  Aquí va tu JavaScript
*/
function verificarRespuestas() {

  var total = 5;
  var puntos = 0;

  var myform = document.forms["quizForm"];
  var respuestas = ["a", "b", "c", "a", "b"];

  for (var i = 1; i <= total; i++) {
    if (myform["p" + i].value === null || myform["p" + i].value === "") {
      alert("por favor responde la pregunta" +i);
      return false;
    } else {
      if (myform["p" + i].value === respuestas[i - 1]) {
        puntos++;
      }

    }

  }
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = '<h3>Obtuvistes <span>' + puntos + '</span> de <span>' + total + ' puntos</span></h3>';
  return false;

}

