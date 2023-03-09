function auto(MARCA, MODELO, ANIO){
    this.marca = MARCA,
    this.modelo = MODELO,
    this.anio = ANIO
}


var auto1 = new auto('TOYOTA', 'CORAL', 2021)
var auto2 = new auto('BORD', 'MODEL xy', 2023)
console.log(auto1, auto2)
