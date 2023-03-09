
//el while significa hacer mientras se cumpla un valor hacer esto
var estudiantes = ['Juan', 'Jorge', 'José', 'Diego']

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    saludarEstudiante(estudiantes.shift())
}