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
  