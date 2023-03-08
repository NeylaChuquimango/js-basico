//un array es un conjunto de elementos de cualquier tipo

var array = [1, 'maria', true]

//pueden existir arrays dentro de un array
 var array1 = [['azul', 'red', 'verde'], [1, 2, 3, 4], ['Maria', 'Juan']]

 //para agregar un elemento al final de un array se usa el metodo push, vamos agregarun elemento a array
 array.push('José') // ahora José se a posicionado al final del array

 //y para eliminar un elemento del final se usa pop
 array.pop() //se habrá eliminado el último elemento del array

 //para agregar un elemento al inicial del array se usa unshift

 array.unshift('Diego') //ahora Diego existe en array en la posicion primera

 //para eliminar un elemento del inicio de un arreglo se usa shift

 array.shift() // ahora Diego ya no existe en el arreglo porque shift lo eliminó