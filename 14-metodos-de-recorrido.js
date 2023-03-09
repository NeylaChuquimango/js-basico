//FILTER : AYUDA A FILTRAR COSAS ESPECIFICAS
//Este metodo ayuda a validar si algo es verdad o falso, este genera un nuevo array

var articulos = [
    {nombre: 'teclado', costo: 300},
    {nombre: 'laptop', costo: 2500},
    {nombre: 'TV', costo: 600},
    {nombre: 'Mouse', costo: 150}
];

//este me devuelve un nuevo arreglo por eso creo una nueva variable
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 600
})

console.log(articulosFiltrados)

//MAP : mapea algunos articulos
//HACE EL RECORRIDO A TODO EL AREGLO Y NOS VA A TRAER TODOS LOS NOMBRES DE LOS ARTICULOS
var nombreArticulos = articulos.map(function(articulo1){
return articulo1.nombre
})
console.log(nombreArticulos)

var costoArticulos = articulos.map(function(articulo2){
    return articulo2.costo
})
console.log(costoArticulos)


//FIND: AYUDA A ENCONTRAR ALGO DENTRO DEL ARTICULO
//si el articulo existe lo regreso o sino se queda ahí
//SE DIFERENCIA DEL FILTER PORQUE DEVUELVE EL PRIMER VALOR ENCONTRADO QUE SE LE PIDE, DONDE LO ENCUENTRA AHÍ SE QUEDA, EN CAMBIO EL FILTER VA A RECORRER TODO EL ARREGLO SIN IMPORTAR SI YA ENCONTRÓ EL VALOR PERDIDO

var encuentraArticulo = articulos.find(function(articulo3){
    return articulo3.nombre === 'TV'
})
console.log(encuentraArticulo)


//FOREACH : NO GENERA UN NUEVO ARREGLO, SIMPLEMENTE FILTRA SOBRE ESE ARREGLO SIN MODIFICARLO
articulos.forEach(function(articulo4){
    console.log(articulo4.nombre)
})

//SOME : REGRESA UNA VALIDACION DE VERDADERO Y FALSO PARA ARICULOS QUE CUMPLAN CON TAL CONDICION

var articulosBaratos = articulos.some(function(articulo5){
    return articulo5.costo <= 700
})

console.log(articulosBaratos) // NOS INDICA QUE SI HAY ARTICULOS QUE CUMPLEN CIERTA CONDICION