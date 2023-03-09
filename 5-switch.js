var numero = 1;
switch (numero){
    case 1: 
    console.log('soy un 1')
    break
    case 10: 
    console.log('soy un 10')
    break
    case 100:
    console.log('soy un 100')
    break
    default:
    console.log('NO soy ninguna de las opciones')
}


function semaforo(color) {
    switch (color) {
      case "verde":
        console.log("PUEDES PASAR");
        break;
      case "amarillo":
        console.log("CAMBIO DE COLOR");
        break;
      case "rojo":
        console.log("NO PUEDES PASAR");
        break;
      default:
        console.log("NO EXISTE ESE COLOR");
    }
  }
  semaforo('rojo')
  

  /*MULTIPLES OPCIONES IDENTICAS*/
  let respuesta = "";
  function multipleOpcion(val) {
    switch (val) {
      case 1:
      case 2:
      case 3:
        respuesta = "Primero";
        break;
      case 4:
      case 5:
      case 6:
        respuesta = "Segundo";
        break;
      case 7:
      case 8:
      case 9:
        respuesta = "Tercero";
        break;
      default:
        respuesta = "No existe";
        break;
    }
    return respuesta;
  }
  console.log(multipleOpcion(4));


   /*DELVUEVE VALORES BOOLEANOS DESDE FUNCIONES*/
   function devuelveBooleano(a, b) {
    return a < b;
  }
 console.log(devuelveBooleano(3, 6 ));


 /*PATRON DE DEVOLUCION ANTICIPADO PARA FUNCIONES */
 function anticipado(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
const valorAnticipado = anticipado(-5, 4);
console.log(valorAnticipado);