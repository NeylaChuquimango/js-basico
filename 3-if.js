var edad = 21;
if(edad === 18){
console.log(`El usuario tiene ${edad} años, es su primera vez votando`)
}
else if(edad > 18){
    console.log(`El usuario tiene más de ${edad} años, votó más de una vez`)

}else{
    console.log(`El usuario aún tiene ${edad} años, es menor de edad`)
}

//CONDICION TERNARIA
//si la condición se cumple entonces será verdadero pero sino será falso 
condition ? true : false


var edad1 = 16;
var resultado = (edad1 >= 18) ? "Soy mayor de edad" : "aún soy menor de edad";
console.log(resultado)