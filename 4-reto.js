var jugador;
var pc;
let resultado;
var min = 0,
  max = 2;

function eleccion(jugada) {
  if (jugada == 0) {
    resultado = "Piedra";
  } else if (jugada == 1) {
    resultado = "Papel";
  } else if (jugada == 2) {
    resultado = "Tijera";
  } else {
    resultado = "No elejiste bien";
  }
  return resultado;
}

function juega(jugador, pc) {
  if (
    (jugador === "Papel" && pc === "Piedra") ||
    (jugador === "Tijera" && pc === "Papel") ||
    (jugador === "Piedra" && pc === "Tijera")
  ) {
    console.log(`GANASTE CON ${jugador} y PC PERDIÓ CON ${pc}`);
  } else if (jugador === pc) {
    console.log(`EMPATE CON ${jugador}`);
  } else {
    console.log(`PERDISTE CON ${jugador} y PC GANÓ CON ${pc}`);
  }
}

juega(eleccion(0), eleccion(Math.floor(Math.random() * (max - min + 1) + min)));
