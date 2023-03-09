var jugador;
var pc;
let resultado;
var min = 0;
var max = 2;

jugador = prompt("Elige 0 => Piedra, 1 => Papel, 2 => Tijera");

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
  switch (jugador) {
    case "Piedra":
      if (pc === "Tijera") {
        console.log(`GANASTE CON ${jugador} y PC PERDIÓ CON ${pc}`);
      } else if (pc === "Piedra") {
        console.log(`EMPATASTE CON ${jugador} Y PC CON ${pc}`);
      } else {
        console.log(`PERDISTE CON ${jugador} y PC GANÓ CON ${pc}`);
      }
      break;
    case "Tijera":
      if (pc === "Papel") {
        console.log(`GANASTE CON ${jugador} y PC PERDIÓ CON ${pc}`);
      } else if (pc === "Tijera") {
        console.log(`EMPATASTE CON ${jugador} Y PC CON ${pc}`);
      } else {
        console.log(`PERDISTE CON ${jugador} y PC GANÓ CON ${pc}`);
      }
      break;
    case "Papel":
      if (pc === "Piedra") {
        console.log(`GANASTE CON ${jugador} y PC PERDIÓ CON ${pc}`);
      } else if (pc === "Papel") {
        console.log(`EMPATASTE CON ${jugador} Y PC CON ${pc}`);
      } else {
        console.log(`PERDISTE CON ${jugador} y PC GANÓ CON ${pc}`);
      }
      break;
    default:
      console.log("NO RECONOZCO ESA OPCION");
  }
}
juega(
  eleccion(jugador),
  eleccion(Math.floor(Math.random() * (max - min + 1) + min))
);
