function iniciaCronometro() {
  var segundos = 10;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  if (nivelActual == 1) {
    segundos = 20;
  } else {
    if (nivelActual == 2) {
      segundos = 25;
    } else {
      if (nivelActual == 3) {
        segundos = 30;
      } else if(nivelActual == 4){
        segundos = 35;
      } 
    }
  }

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }

    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  cronometro = setInterval(actualizaContador, 1000);
}
