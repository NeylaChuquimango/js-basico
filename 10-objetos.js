//EJEMPLO MDN
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar)


//un objeto es una estructura de datos que permite almacenar valores mediante una propiedad
var persona = {
  nombre: "Neyla",
  apellido: "Chuquimango",
  dni: 71811427,
};

//para acceder a una propiedad de un objeto con lo siguiente
persona.apellido;
// console.log(persona.apellido);

//this, es la manera de acceder a los valores del objeto, hace referencia al objeto padre así:

var auto = {
  marca: "Toyota",
  modelo: "Corola",
  annio: 2020,
  detalleProducto: function () {
    console.log(`Auto con marca ${this.marca} y modelo ${this.modelo}`);
  },
};

auto.detalleProducto()


//ACCEDER A UNA PROPIEDAD DE UN OBJETO 
//MEDIANTE NOTACION DE CORCHETES
auto["marca"]
console.log(auto["marca"])

//MEDIANTE NOTACION DE PUNTO
auto.marca
console.log(auto.marca)

//AÑADIR PROPIEDADES A UN OBJETO
auto['color'] = 'Rojo'
auto.detalleProducto.duenio = 'Diego'

//PARA ELIMINAR UNA PROPIEDAD DE UNN OBJETO
delete auto.detalleProducto.duenio

console.log(auto)

