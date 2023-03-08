//usamos el for para recorrer cada uno de los elemntos del array
var estudiantes = ['Maria', 'Sergio', 'Juan']

function saludarEstudiante(estuadiante){
    console.log(`Hola ${estuadiante}`)
}

//aquí se usa el for nada más
for( let i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i])
}

//usando for of

for(let estuadiante of estudiantes){
    saludarEstudiante(estuadiante)
}

//estudiante pasará a ser como un elemento de estudiantes o el index 