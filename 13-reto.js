var autos = []
function auto(MARCA, MODELO, ANNIO) {
  this.marca = MARCA, 
  this.modelo = MODELO, 
  this.annio = ANNIO;
}
var cantidad = prompt('¿Cuántos autos desea ingresar?')
for (let i = 0; i < cantidad; i++) {

var marca = prompt('Marca: ')
var modelo = prompt('Modelo: ')
var annio = prompt('Annio: ')

  var autoNuevo = new auto(marca, modelo, annio);

  autos.push(autoNuevo)
}
console.log(autos);


