// var miAuto = {
//     marca: 'toyota',
//     modelo : 'Corola',
//     annio : 2020,
//     detalleProducto: function (){
//         console.log(`Auto ${miAuto.modelo} y ${miAuto.marca}`)
//     }
// }
// miAuto.detalleProducto()

//EN EL SIGUIENTE EJEMPLO NOS DEVUELVE ERROR PORQUE SE COLOCA miAuto lo cual en este ejemplo no existe
var otroAuto = {
  marca: "toyota",
  modelo: "Corola",
  annio: 2020,
  detalleProducto: function () {
    console.log(`Auto ${miAuto.modelo} y ${miAuto.marca}`);
  },
};
otroAuto.detalleProducto();
