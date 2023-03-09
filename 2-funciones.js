
function miFuncion(a, b){
    return a + b
    
}
miFuncion (5, 4)
console.log(miFuncion (5, 4))

//AMBITO LOCAL Y FUNCIONES
function test() {
    const num = "foo";
    console.log(num);
  }
  test();


  //DEVUELVE INDEFINIDO PORQUE NO ESTÁ RETORNANDO NADA O MEJOR DICHO NO SE COLOCÓ EL RETURN
let g = 10;
function addSum(num) {
    g = g + num;
    console.log(num)
}
console.log(addSum(3));


/* PERMANECE EN LINEA*/
function nextInline(arr, item) {
    arr.push(item);
    const elementoElimiando = arr.shift();
    return elementoElimiando;
  }
 
  const testArr = [2, 3, 4, 5];
  console.log(JSON.stringify(testArr)); /* stringify convierte un valor a un objeto de javascript*/
  console.log(nextInline(testArr, 6));
  console.log(JSON.stringify(testArr));