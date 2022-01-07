function subeNivel() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
    segundos = segundos + 10;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
