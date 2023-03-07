var piedra = 0;
var papel = 1;
var tijera = 2;
var jugador;
var pc;

var min = 0,
  max = 2;

function juega(jugador, pc) {
  if (
    (jugador === 0 && pc === 2) ||
    (jugador === 2 && pc === 1) ||
    (jugador === 1 && pc === 0)
  ) {
    console.log(`GANASTE CON ${jugador} y PC PERDIÓ CON ${pc}`);
  } else if (jugador === pc) {
    console.log(`EMPATE CON ${jugador}`);
  } else {
    console.log(`PERDISTE CON ${jugador} y PC GANÓ CON ${pc}`);
  }
}
opcion(jugador)

juega(2, Math.floor(Math.random() * (max - min + 1) + min));

function opcion(numero) {
  if (numero === 0) {
    console.log("Piedra");
  } else if (numero === 1) {
    console.log("Papel");
  } else {
    console.log("Tijera");
  }
}